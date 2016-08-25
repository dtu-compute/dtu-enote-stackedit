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

  db.list({
    limit: 10
  }, function(err, body) {
    if (!err) {
      var ids = __.pluck(body.rows.filter(function(doc) {
        return doc.id.indexOf('_design') !== 0;
      }), "id");

      __.each(ids, function(id) {

        db.get(id, {
          include_doc: true
        }, function(err, doc_body) {
          if (!err) {

            db.attachment.get(id, "content", function(err, content_body) {
              if (!err) {
                var file_name = path.join(folder, doc_body.title + ".md");

                console.log(file_name);

                fs.writeFileSync(file_name, content_body);
              } else {
                console.error(err);
              }
            });
          } else {
            console.error(err);
          }
        });

      });

    } else {
      console.error(err);
    }
  });
}

module.exports = downloadFiles;