var yamlJs = require('yamljs');
var __ = require('underscore');
var url = require('url');
var runsync = require('runsync'); // use this instead of child_process since we're bound to node 0.10.x

function run_cmd(cmd, args) {

  console.log("executing: " + cmd)
  console.log(args)
  try {
    var child = runsync.spawn(cmd, args, {
      encoding: "utf8"
    });
    console.log("ended: " + cmd)
    console.log(child.stdout);
    console.log("ERR" + child.stderr);
    console.log("EXIT STATUS: " + child.status)

  } catch (e) {
    console.error(e)
  }
}


var couseInfoRootPath = '../'
var courseInfo = {
  error: 'uninitialized'
};
try {
  courseInfo = yamlJs.load(couseInfoRootPath + 'dtu-data/courses.yml');

  __.each(courseInfo, function(info, course) {
    var users = []
    if (info.hasOwnProperty('db')) {
      var db_url = url.parse(info.db)
      var up = db_url.auth.split(':')
      var username = up[0],
        password = up[1];

      var docker_url = info.db.replace(db_url.host, "couchdb:6984")

      db_url.host = "couchdb:6984";

      console.log("creating the user " + username + "...")
      var args = ["--insecure", "-X", "PUT", "https://dtuadmin:Aevee7Le@" + db_url.host + "/_config/admins/" + username, "-d", "\"" + password + "\""];
      run_cmd("curl", args);

      console.log("creating the db...")
      args = ["couchdb/setup.js", docker_url];
      run_cmd("node", args);

    }
  })
} catch (e) {
  courseInfo = {
    error: e
  };
}