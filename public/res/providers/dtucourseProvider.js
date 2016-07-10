define([
  "utils",
  "fileMgr",
  "publisher",
  "settings",
  "eventMgr",
  "classes/Provider",
  "classes/AsyncTask",
  "constants",
], function(utils, fileMgr, publisher, settings, eventMgr, Provider, AsyncTask, constants) {

  var dtuCourseProvider = new Provider("dtuCourse", "DTU Course Website File");
  dtuCourseProvider.defaultPublishFormat = "html";
  dtuCourseProvider.publishPreferencesInputIds = [
    /*    "course-name",
    "subsection",
*/
  ];

  // TODO: should get this from publisher?

  // Get the html from the onPreviewFinished callback
  var currentHTML;
  eventMgr.addListener("onPreviewFinished", function(htmlWithComments, htmlWithoutComments) {
    currentHTML = {
      withComments: htmlWithComments,
      withoutComments: htmlWithoutComments
    };
  });

  dtuCourseProvider.publish = function(publishAttributes, frontMatter, title, content, callback) {
    var fileDesc = fileMgr.currentFile;
    var content = currentHTML.withoutComments;
    /*publisher.applyTemplate(fileDesc, {
      customTmpl: settings.pdfTemplate
    }, currentHTML);*/
    var task = new AsyncTask();
    /*    task.onRun(function() {
      if (isOffline === true) {
        eventMgr.onError("Operation not available in offline mode.");
        return task.chain();
      }
    });
*/
    task.onRun(function() {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', constants.DTUCOURSE_EXPORT_URL + '?' + $.param({
        //        options: settings.pdfOptions
      }), true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.responseType = 'json';
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            //pdf = this.response;
            console.log(this.response);
          } else {
            eventMgr.onError("Error when trying to upload course HTML: " + this.statusText);
          }
          task.chain();
        }
      };
      console.log(content);
      xhr.send(content);
    });
    task.onSuccess(function() {
      //      pdf && utils.saveAs(pdf, fileMgr.currentFile.title + ".pdf");
    });
    task.enqueue();
  };

  dtuCourseProvider.newPublishAttributes = function(event) {
    var publishAttributes = {};
    if (event.isPropagationStopped()) {
      return undefined;
    }
    return publishAttributes;
  };

  return dtuCourseProvider;
});