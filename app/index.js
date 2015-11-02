var express = require('express');
var app = express();
var compression = require('compression');
var serveStatic = require('serve-static');
var yamlJs = require('yamljs');

// TODO: hook this up with CAS and put it in a more appropriate place
var userName = 'abcd';

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
app.get('/editor', function(req, res) {
	res.renderDebug('editor.html');
});

// Serve viewer.html in /viewer
app.get('/viewer', function(req, res) {
	res.renderDebug('viewer.html');
});



// Serve GET endpoint for 
var courses = [];
var courseMap = {};
try {
	courseInfo = yamlJs.load('./app/stackedit.yaml');
	for (c in courseInfo) {
		if (courseInfo.hasOwnProperty(c)) {
			if (courseInfo[c].members.indexOf(userName) !== -1) {
				var id = c.split(/\s/)[0];
				courses.push( { id: id, name: c } );
				courseMap[id] = courseInfo[c].db;
			}
		}
	}
} catch (e) {
	courseInfo = { error: e }
}
app.get('/data/courses', function(req, res) {
	res.json(courseInfo);
});

// Serve login.html in /login
app.get('/login', function(req, res) {
	res.renderDebug('login.html', { courseMap: courseMap, courses: courses });
});



// Error 404
app.use(function(req, res) {
	res.status(404);
	res.render('error_404.html');
});

module.exports = app;
