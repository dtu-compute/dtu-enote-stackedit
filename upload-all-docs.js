var __ = require('underscore');
var fs = require('fs');
var nano = require('nano');
var path = require('path');
var glob = require('glob');


function uploadAllDocs(url, coursedb, folder) {

  console.log("uploadAllDocs " + url + " " + coursedb + " " + folder);
  var couch = nano({
    "url": url,
    "parseUrl": true
  });

  //var db = couch.use(coursedb);
  var db = couch;

  // Copied from stackedit
  // Generates a 24 char length random id
  var idAlphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var id = function() {
    var result = [];
    for (var i = 0; i < 24; i++) {
      result.push(idAlphabet[Math.random() * idAlphabet.length | 0]);
    }
    return result.join('');
  };


  db.list({
    include_docs: true,
    limit: 100,
    descending: true
  }, function(error, body /*, headers*/ ) {
    doc_map = {};
    __.each(body.rows, function(i) {
      if (i.doc.title && doc_map.hasOwnProperty(i.doc.title)) {
        db.destroy(i.id, i.doc._rev, function(error, headers) {
          console.log("deleted " + i.id + " " + i.doc.title + " " + error + ";" + headers);
        });
      } else {
        doc_map[i.doc.title] = i.doc;
      }
    });
    console.log(doc_map);

    glob(folder + '/*.md', {}, function(er, files) {
      if (!er) {
        __.each(files, function(fname) {

          var title = path.basename(fname, ".md");
          var updated = new Date(fs.statSync(fname).mtime).getTime();
          var b64 = new Buffer(fs.readFileSync(fname)).toString('base64');

          console.log('uploading ' + title);

          var doc = {
            "_id": id(),
            "title": title,
            "updated": updated,
            "_attachments": {
              "content": {
                "content_type": "text/plain",
                "data": b64
              }
            }
          };

          if (doc_map.hasOwnProperty(title)) {
            doc._id = doc_map[title]._id;
            doc._rev = doc_map[title]._rev;
          };

          db.insert(doc, function(err, body) {
            if (!err) {
              console.log("Succeeded in uploading " + fname + " ...");
              console.log(body);
            } else {
              console.error(err);
            }
          });

        });
      } else {
        console.error(er);
      }
    });

    //    console.log(body.map(function(d) {
    //      d.doc
    //    }));
  });

  return;


}

module.exports = uploadAllDocs;