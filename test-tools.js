uploadFile = require("./upload-doc.js");
uploadAllDocs = require("./upload-all-docs.js");
downloadAllDocs = require("./download-all-docs.js");

//var url = "https://user00000:Die2Imae@couchdb.docker.local/"
var url = "https://user01005:uloh2ieH@couchdb.docker.local/";
//var coursedb = 'db00000';
var coursedb = 'db01005';
//var fname = '../dtu-data/01005-content/Frontpage-left.md';
//var folder = '../dtu-data/01005-content';
//var folder = './tmp';
var folder = '../test-01005';

//NODE_TLS_REJECT_UNAUTHORIZED=0 node test-tools.js
//uploadFile(url, coursedb, fname)
//downloadAllDocs(url, coursedb, folder)
uploadAllDocs(url, coursedb, folder);
