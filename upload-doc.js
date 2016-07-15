var fs = require('fs');
var nano = require('nano')
var path = require('path');


function uploadFile(url, coursedb, fname) {

  var title = path.basename(fname, ".md")
  var updated = new Date(fs.statSync(fname).mtime).getTime()
  var couch = nano({
    "url": url,
    "parseUrl": true
  });

  var db = couch.use(coursedb);



  // Copied from stackedit
  // Generates a 24 char length random id
  var idAlphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  id = function() {
    var result = [];
    for (var i = 0; i < 24; i++) {
      result.push(idAlphabet[Math.random() * idAlphabet.length | 0]);
    }
    return result.join('');
  };

  db.list({
    limit: 10
  }, function(err, body) {
    if (!err) {
      body.rows.filter(function(doc) {
        return doc.id.indexOf('_design') !== 0
      }).forEach(function(doc) {

        console.log(doc);

        db.get(doc.id, {
          include_doc: true
        }, function(err, body) {
          if (!err) {
            console.log(body)
          } else {
            console.error(err);
          }
        })


        db.attachment.get(doc.id, "content", function(err, body) {
          if (!err) {
            console.log(body.toString())
          } else {
            console.error(err);
          }
        })
      });

    } else {
      console.error(err);
    }
  });

  b64 = new Buffer(fs.readFileSync(fname)).toString('base64');


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
  }

  console.log(doc)

  db.insert(doc, function(err, body) {
    if (!err) {
      console.log(body)
    } else {
      console.error(err);
    }
  })
}

module.exports = uploadFile;