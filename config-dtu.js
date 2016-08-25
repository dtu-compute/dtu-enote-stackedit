var yamlJs = require('yamljs');
var __ = require('underscore');
var url = require('url');
var runsync = require('runsync'); // use this instead of child_process since we're bound to node 0.10.x
var uploadAllDocs = require("./upload-all-docs.js");


function run_cmd(cmd, args) {

  console.log("executing: " + cmd);
  console.log(args);
  try {
    var child = runsync.spawn(cmd, args, {
      encoding: "utf8"
    });
    console.log("ended: " + cmd + "EXIT STATUS: " + child.status);
    console.log(child.stdout);
    if (child.stderr) {
      console.log("ERR" + child.stderr);
    }
    if (child.status === 0) {
      return child.stdout;
    } else {
      return undefined;
    }

  } catch (e) {
    console.error(e);
  }
}


var couchdbInfoRootPath = '/data/config';
var couchdbInfo = {
  error: 'uninitialized'
};
var docker_host = "couchdb:6984";
try {
  couchdbInfo = yamlJs.load(couchdbInfoRootPath + '/couchdb.yaml');

  var db_admin_url = url.parse(couchdbInfo._admin.db);
  var docker_admin_url = couchdbInfo._admin.db.replace(db_admin_url.host, docker_host);

  console.log("USERS/DBS BEFORE SETUP");
  var get_users_args = ["--insecure", docker_admin_url + '/_users/_all_docs', '-H', 'Accept: application/json, text/javascript; q=0.01', '-H', 'Accept-Encoding: identity'];
  var get_admins_args = ["--insecure", docker_admin_url + '/_config/admins', '-H', 'Accept: application/json, text/javascript; q=0.01', '-H', 'Accept-Encoding: identity'];
  var get_dbs_args = ["--insecure", docker_admin_url + '/_all_dbs', '-H', 'Accept: application/json, text/javascript; q=0.01', '-H', 'Accept-Encoding: identity'];
  run_cmd("curl", get_users_args);
  run_cmd("curl", get_admins_args);
  run_cmd("curl", get_dbs_args);
  __.each(couchdbInfo, function(info, course) {
    if (info.hasOwnProperty('db') && course !== '_admin') {
      var db_url = url.parse(info.db);
      var up = db_url.auth.split(':');
      var username = up[0],
        password = up[1];

      var docker_url = info.db.replace(db_url.host, docker_host);
      var docker_url_comps = url.parse(docker_url);

      db_url.host = docker_host;

      console.log("checking to see if db/user exists for " + course + " ...");

      var args = ["--insecure", docker_url + '/_design/by_update/_view/default?descending=true&include_docs=true&limit=25&reduce=false', '-H', 'Accept: application/json, text/javascript; q=0.01', '-H', 'Accept-Encoding: identity',
        //'-H', Authorization: Basic dXNlcjAxMDA1OnBhc3MwMTAwNQ=='
      ];
      var result = run_cmd("curl", args);
      result = result !== undefined ? JSON.parse(result) : undefined;
      if (result !== undefined && !result.hasOwnProperty('error')) {
        console.log("DB/user exists! skipping...");
      } else {
        // TODO :we probably should be creating users here, not admins as we're doing. http://wiki.apache.org/couchdb/How_to_create_users_via_script
        console.log("creating the user " + username + "...");

        args = ["--insecure", "-X", "PUT", docker_admin_url + "/_config/admins/" + username, "-d", '"' + password + '"'];
        run_cmd("curl", args);

        console.log("creating the db...");
        args = ["--insecure", "-X", "PUT", docker_url];
        run_cmd("curl", args);

        console.log("configuring the db...");
        args = ["couchdb/setup.js", docker_url];
        run_cmd("node", args);

        console.log("populating existing files...");
        uploadAllDocs(docker_url.replace(docker_url_comps.pathname, ""), db_url.path.replace("/", ""), couchdbInfoRootPath + '../website-raw/' + course);

        args = ["couchdb/setup.js", docker_url];
        run_cmd("node", args);
      }
    }

  });

  console.log("USERS/DBS AFTER SETUP");
  run_cmd("curl", get_users_args);
  run_cmd("curl", get_admins_args);
  run_cmd("curl", get_dbs_args);
} catch (e) {
  console.error(e);
}