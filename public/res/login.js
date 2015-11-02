// RequireJS configuration
/*global requirejs */
requirejs.config({
  waitSeconds: 0,
  packages: [
    {
      name: 'css',
      location: 'bower-libs/require-css',
      main: 'css'
    },
    {
      name: 'less',
      location: 'bower-libs/require-less',
      main: 'less'
    }
  ],
  paths: {
    jquery: 'bower-libs/jquery/jquery',
    underscore: 'bower-libs/underscore/underscore',
    bootstrap: 'bower-libs/bootstrap/dist/js/bootstrap',
    requirejs: 'bower-libs/requirejs/require',
    'jquery-waitforimages': 'bower-libs/waitForImages/src/jquery.waitforimages',
    'jquery-ui': 'bower-libs/jquery-ui/ui/jquery-ui',
    'jquery-ui-core': 'bower-libs/jquery-ui/ui/jquery.ui.core',
    'jquery-ui-widget': 'bower-libs/jquery-ui/ui/jquery.ui.widget',
    'jquery-ui-mouse': 'bower-libs/jquery-ui/ui/jquery.ui.mouse',
    'jquery-ui-draggable': 'bower-libs/jquery-ui/ui/jquery.ui.draggable',
    'jquery-ui-effect': 'bower-libs/jquery-ui/ui/jquery.ui.effect',
    'jquery-ui-effect-slide': 'bower-libs/jquery-ui/ui/jquery.ui.effect-slide',
    'requirejs-text': 'bower-libs/requirejs-text/text',
    'bootstrap-tour': 'bower-libs/bootstrap-tour/build/js/bootstrap-tour',
    css_browser_selector: 'bower-libs/css_browser_selector/css_browser_selector',
    'require-css': 'bower-libs/require-css/css',
    css: 'bower-libs/require-css/css',
    'css-builder': 'bower-libs/require-css/css-builder',
  },
  shim: {
    underscore: {
      exports: '_'
    },
    'bootstrap-tour': {
      deps: [
        'bootstrap'
      ],
      exports: 'Tour'
    },
    bootstrap: [
      'jquery'
    ],
    'jquery-waitforimages': [
      'jquery'
    ],
  }
});


require([
  "jquery",
  "underscore",
  "bootstrap",
  "settings",
  "storage",
], function($, _, bootstrap, settings, storage) {

  if(window.noStart) {
    return;
  }

  $(function() {
    $('#choose-courses').modal();
    $('#to-editor').click(function(e) { 
      var courseId = $('#select-course option:selected').val()
      settings.couchdbUrl = courseMap[courseId];
      console.log('couchDB url: ' + settings.couchdbUrl);
      storage.settings = JSON.stringify(settings);
      window.location = 'editor';
    })
  });
});
