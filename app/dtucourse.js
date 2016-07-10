/* global window,MathJax */
var spawn = require('child_process').spawn;
var fs = require('fs');
var path = require('path');
var os = require('os');
var request = require('request');

exports.export = function(req, res, next) {
  function onError(err) {
    next(err);
  }

  function onUnknownError() {
    res.statusCode = 400;
    res.end('Unknown error');
  }

  function onUnauthorizedError() {
    res.statusCode = 401;
    res.end('Unauthorized');
  }

  function onTimeout() {
    res.statusCode = 408;
    res.end('Request timeout');
  }

  htmlOut = fs.createWriteStream('myOutput.html');

  req.pipe(htmlOut);
};