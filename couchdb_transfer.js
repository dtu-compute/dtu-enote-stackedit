yamlJs = require("yamljs");
uploadFile = require("./upload-doc.js");
uploadAllDocs = require("./upload-all-docs.js");
downloadAllDocs = require("./download-all-docs.js");

if (!(process.argv[2].match("(im|ex)port")) ||
  process.argv.length < 4) {
  throw "couchdb_transfer.js <export|import> <course> <filespec...>";
}

var configRootPath = "../vol/config/";
var course = process.argv[3];
var upload = process.argv[2] !== 'export';


try {
  fileName = configRootPath + 'couchdb.yaml';
  console.log(fileName);
  var couchdbConfig = yamlJs.load(fileName);

  if (!couchdbConfig.hasOwnProperty(course) || !couchdbConfig[course].hasOwnProperty('db')) {
    throw "Course " + course + " doesn't have a db defined in  " + fileName;
  }

  var dbUrl = couchdbConfig[course].db;
  var coursedb = "db" + course;
  var folder = '.';

  if (upload) {
    console.log("Importing...");
    uploadAllDocs(dbUrl, coursedb, folder);
  } else {
    console.log("Exporting... ");
    var filespec = process.argv.slice(4);
    console.log(filespec);

    downloadAllDocs(dbUrl, coursedb, folder, filespec);
  }

} catch (e) {
  courseInfo = {
    error: e,
    fileName: fileName
  };
}

console.log('done');