var express = require('express');
var session = require('express-session');
var app = express();
var compression = require('compression');
var serveStatic = require('serve-static');
var yamlJs = require('yamljs');
var CASAuthentication = require('cas-authentication');

// Set up an Express session, which is required for CASAuthentication. 
app.use( session({
    secret            : 'super secret key',
    resave            : false,
    saveUninitialized : true,
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

// Create a new instance of CASAuthentication. 
var cas = new CASAuthentication({
	cas_url     : 'https://auth.dtu.dk/dtu',
	service_url : 'https://auth.dtu.dk/dtu/login?service=',
	cas_version : '2.0',
});

function debug_bounce(req, res, next) {
	if (!req.query.hasOwnProperty('debug') ) {
		return cas.bounce(req, res, next);
	} else {
		req.session.cas_user = 'abcd';
	}
	next();
}

function debug_block(req, res, next) {
	if (!req.query.hasOwnProperty('debug') ) {
		return cas.block(req, res, next);
	} else {
		next();
	}
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
app.get('/editor', debug_block, function(req, res) {
	res.renderDebug('editor.html');
});

// Serve viewer.html in /viewer
app.get('/viewer', debug_block, function(req, res) {
	res.renderDebug('viewer.html');
});


var courseInfo = { error: 'uninitialized' };
try {
	courseInfo = yamlJs.load('./app/stackedit.yaml');
} catch (e) {
	courseInfo = { error: e };
}

app.get('/data/courses', function(req, res) {
	res.json(courseInfo);
});

// Serve login.html in /login
app.get('/login', /*cas.bounce || */debug_bounce, function(req, res) {

		if (courseInfo.hasOwnProperty('error')) {
			// handle the case where the YAML file failed to parse.

			res.json({ name: 'Server Error.  Failed to parse course YAML file', error: courseInfo.error });

		} else {

			var courses = [];
			var courseMap = {};

			// Find all the courses for the user.
			for (var c in courseInfo) {
				if (courseInfo.hasOwnProperty(c)) {
					if (courseInfo[c].members.indexOf(req.session.cas_user) !== -1) {
						var id = c.split(/\s/)[0];
						courses.push( { id: id, name: c } );
						courseMap[id] = courseInfo[c].db;
					}
				}			
			}

			req.session.courses = courses;
			req.session.courseMap = courseMap;

			res.renderDebug('login.html', { courseMap: req.session.courseMap, courses: req.session.courses, cas_user: req.session.cas_user });
	}
});



// Error 404
app.use(function(req, res) {
	res.status(404);
	res.render('error_404.html');
});

module.exports = app;
