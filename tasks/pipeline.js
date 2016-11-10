var cssFilesToInject = [
  'styles/**/*.css'
];

var jsFilesToInject = [

  'js/dependencies/sails.io.js',

  'js/dependencies/**/*.js',

  'js/**/*.js',

  'js/**/*.ejs'
];

var templateFilesToInject = [
  'templates/**/*.html'
];

var tmpPath = '.tmp/public/';

module.exports.cssFilesToInject = cssFilesToInject.map(function (cssPath) {
  return require('path').join('.tmp/public/', cssPath);
});

module.exports.jsFilesToInject = jsFilesToInject.map(function (jsPath) {
  return require('path').join('.tmp/public/', jsPath);
});

module.exports.templateFilesToInject = templateFilesToInject.map(function (tplPath) {
  return require('path').join('assets/', tplPath);
});
