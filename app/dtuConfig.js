var yamlJs = require('yamljs');
var __ = require('underscore');

var configRootPath = '/data/config/';

var dtuConfig = (function() {

  var fileName;
  var courseInfo = {
    error: 'uninitialized'
  };
  var stackeditConfig = {
    sessionSecret: 'default secret unsafe banana'
  };


  try {

    // user permissions config

    courseInfo = yamlJs.load(configRootPath + 'courses.yaml');

    __.each(courseInfo, function(info, course) {
      var users = [];
      if (info.hasOwnProperty('groups')) {
        fileName = configRootPath + info.groups;
        courseInfo[course].groups = yamlJs.load(fileName);

        __.each(courseInfo[course].groups, function(group_info, group) {

          __.each(courseInfo[course].groups[group], function(authority, user) {
            if (authority == 'Administrator') {
              users.push(user);
            }
          });
        });
      }

      courseInfo[course].members = __.uniq(users);
    });

    //couchdb config
    fileName = configRootPath + 'couchdb.yaml';
    var couchdb = yamlJs.load(fileName);

    __.each(courseInfo, function(info, course) {
      if (!couchdb.hasOwnProperty(course)) {
        console.error('Course ' + course + ' defined in courses.yaml does not have a db specified in couchdb.yaml');
        throw new Error("Invalid configuration");
      } else {
        courseInfo[course].db = couchdb[course].db;
      }
    });


    // stackedit config
    fileName = configRootPath + 'stackedit.yaml';
    stackeditConfig = yamlJs.load(fileName);
  } catch (e) {
    courseInfo = {
      error: e,
      fileName: fileName
    };
  }

  console.log("DTU-Data loaded");
  console.log(courseInfo);
  console.log('secret: ' + stackeditConfig.sessionSecret);
  console.log(stackeditConfig);

  return {
    courseInfo: courseInfo,
    sessionSecret: stackeditConfig.sessionSecret
  };
})();

module.exports = dtuConfig;