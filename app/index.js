var express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var app = express();
var compression = require('compression');
var serveStatic = require('serve-static');
var yamlJs = require('yamljs');
var CASAuthentication = require('cas-authentication');

// Set up an Express session, which is required for CASAuthentication. 
app.use(session({
  secret: 'super secret key',
  store: new FileStore(),
  resave: true,
  saveUninitialized: true,
}));


// Configure ejs engine
app.set('views', __dirname + '/../views');
app.engine('html', require('ejs').renderFile);

// Force HTTPS on stackedit.io
app.all('*', function(req, res, next) {
  if (req.headers.host == 'stackedit.io' && !req.secure && req.headers['x-forwarded-proto'] != 'https') {
    return res.redirect('https://stackedit.io' + req.url);
  }
  /\.(eot|ttf|woff|svg)$/.test(req.url) && res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Use gzip compression
app.use(compression());

var cas;

function debug_wrapper(f) {
  return function(req, res, next) {
    if (!req.query.hasOwnProperty('debug')) {
      console.log('BOUNCE: ' + req.url);
      console.log(JSON.stringify(req.session.cas_user, null, 4));
      console.log(JSON.stringify(req.session.cas_userinfo, null, 4));
      console.log('BOUNCE: ' + JSON.stringify(req.headers, null, 4));
      return f(req, res, next);
    } else {
      req.session.cas_user = 'abcd';
    }
    next();
  };
}

app.post('/pdfExport', require('./pdf').export);
app.post('/sshPublish', require('./ssh').publish);
app.post('/picasaImportImg', require('./picasa').importImg);
app.get('/downloadImport', require('./download').importPublic);

// Serve static resources
app.use(serveStatic(__dirname + '/../public'));

app.use(function(req, res, next) {
  res.renderDebug = function(page, params) {
    params = params || {};
    params.cache = !req.query.hasOwnProperty('debug');
    return res.render(page, params);
  };
  next();
});

// Serve landing.html in /
app.get('/', function(req, res) {
  res.renderDebug('landing.html');
});

// Serve editor.html in /viewer
app.get('/editor', debug_wrapper(function() {
  cas.block.apply(cas, arguments);
}), function(req, res) {
  res.renderDebug('editor.html');
});

// Serve viewer.html in /viewer
app.get('/viewer', debug_wrapper(function() {
  cas.block.apply(cas, arguments);
}), function(req, res) {
  res.renderDebug('viewer.html');
});


var courseInfo = {
  error: 'uninitialized'
};
try {
  courseInfo = yamlJs.load('./app/stackedit.yaml');
} catch (e) {
  courseInfo = {
    error: e
  };
}

app.get('/data/courses', function(req, res) {
  res.json(courseInfo);
});

// Serve login.html in /login
app.get('/login', debug_wrapper(function() {
  cas.bounce.apply(cas, arguments);
}), function(req, res) {

  if (courseInfo.hasOwnProperty('error')) {
    // handle the case where the YAML file failed to parse.

    res.json({
      name: 'Server Error.  Failed to parse course YAML file',
      error: courseInfo.error
    });

  } else {

    var courses = [];
    var courseMap = {};

    // Find all the courses for the user.
    for (var c in courseInfo) {
      if (courseInfo.hasOwnProperty(c)) {
        if (courseInfo[c].members.indexOf(req.session.cas_user) !== -1) {
          var id = c.split(/\s/)[0];
          courses.push({
            id: id,
            name: c
          });
          courseMap[id] = courseInfo[c].db;
        }
      }
    }

    req.session.courses = courses;
    req.session.courseMap = courseMap;

    res.renderDebug('login.html', {
      courseMap: req.session.courseMap,
      courses: req.session.courses,
      cas_user: req.session.cas_user
    });
  }
});

// This route will de-authenticate the client with the Express server and then 
// redirect the client to the CAS logout page. 
app.get('/logout', debug_wrapper(function() {
  cas.logout.apply(cas, arguments);
}), function(req, res) {
  res.renderDebug('landing.html');
});

// Error 404
app.use(function(req, res) {
  res.status(404);
  res.render('error_404.html');
});

app.setServer = function(server) {
  // TODO: SE_EXTERNAL_PROTOCOL?
  var port = process.env.SE_EXTERNAL_PORT || server.address().port;
  var host = process.env.SE_EXTERNAL_HOST || server.address().address;

  var service_url = 'http://' + host + ':' + port;

  console.log("Initializing CAS with service URL: " + service_url)

  // Initialize the CASAuthentication when we know our address
  var casProps = {
    cas_url: 'https://auth.dtu.dk/dtu',
    service_url: service_url,
    cas_version: '2.0',
    //is_dev_mode	: true,
    //dev_mode_user : 'abcd',
  };

  //	casProps.service_url = 'http://localhost:3000';

  // Create a new instance of CASAuthentication. 
  cas = new CASAuthentication(casProps);
};

module.exports = app;
