var __ = require('underscore');
var fs = require('fs');
var nano = require('nano');
var path = require('path');

function downloadFiles(url, coursedb, folder) {

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
  }, function(err, body) {
    if (!err) {
      ids = __.pluck(body.rows.filter(function(doc) {
        return doc.id.indexOf('_design') !== 0
      }), "id")

      __.each(ids, function(id) {

        db.get(id, {
          include_doc: true
        }, function(err, doc_body) {
          if (!err) {

	    console.log('Loading '+doc_body.title+' id ' + id)

            db.attachment.get(id, "content", function(err, content_body) {
              if (!err) {
                var file_name = path.join(folder, doc_body.title + ".md");

                console.log(file_name)
	    console.log('Loading '+doc_body.title+' id ' + id)

                fs.writeFileSync(file_name, content_body)
              } else {
                console.error(err);
              }
            })
          } else {
            console.error(err);
          }
        })

      });

    } else {
      console.error(err);
    }
  });
}

module.exports = downloadFiles;
