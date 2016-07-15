var yamlJs = require('yamljs');
var __ = require('underscore');
var url = require('url');
var runsync = require('runsync'); // use this instead of child_process since we're bound to node 0.10.x
var glob = require('glob');
uploadAllDocs = require("./upload-all-docs.js");


function run_cmd(cmd, args) {

  console.log("executing: " + cmd)
  console.log(args)
  try {
    var child = runsync.spawn(cmd, args, {
      encoding: "utf8"
    });
    console.log("ended: " + cmd + "EXIT STATUS: " + child.status)
    console.log(child.stdout);
    if (child.stderr) {
      console.log("ERR" + child.stderr);
    };
    if (child.status == 0) {
      return child.stdout
    } else {
      return undefined
    }

  } catch (e) {
    console.error(e)
  }
}


var courseInfoRootPath = '/'
var courseInfo = {
  error: 'uninitialized'
};
try {
  courseInfo = yamlJs.load(courseInfoRootPath + 'dtu-data/courses.yml');

  __.each(courseInfo, function(info, course) {
    var users = []
    if (info.hasOwnProperty('db')) {
      var db_url = url.parse(info.db)
      var up = db_url.auth.split(':')
      var username = up[0],
        password = up[1];

      var docker_url = info.db.replace(db_url.host, "couchdb:6984")
      var docker_url_comps = url.parse(docker_url)

      db_url.host = "couchdb:6984";

      console.log("checking to see if db/user exists for " + course + " ...")

      var args = ["--insecure", docker_url + '/_design/by_update/_view/default?descending=true&include_docs=true&limit=25&reduce=false', '-H', 'Accept: application/json, text/javascript; q=0.01', '-H', 'Accept-Encoding: identity',
        //'-H', Authorization: Basic dXNlcjAxMDA1OnBhc3MwMTAwNQ=='
      ]
      result = run_cmd("curl", args);
      result = result ? JSON.parse(result) : undefined;
      if (result != undefined && !result.hasOwnProperty('error')) {
        console.log("DB/user exists! skipping...")
      } else {
        console.log("creating the user " + username + "...")
        args = ["--insecure", "-X", "PUT", "https://dtuadmin:Aevee7Le@" + db_url.host + "/_config/admins/" + username, "-d", "\"" + password + "\""];
        run_cmd("curl", args);

        console.log("creating the db...")
        args = ["--insecure", "-X", "PUT", docker_url];
        run_cmd("curl", args);
        //  curl --insecure -X PUT https://user$i:pass$i@$DB:6984/db$i

        console.log("configuring the db...")
        args = ["couchdb/setup.js", docker_url];
        run_cmd("node", args);

        console.log("populating existing files...");
        uploadAllDocs(docker_url.replace(docker_url_comps.pathname, ""), db_url.path.replace("/", ""), courseInfoRootPath + 'dtu-data/' + course + '-content');

        args = ["couchdb/setup.js", docker_url];
        run_cmd("node", args);

      }
    }
  })
} catch (e) {
  console.error(e)
}