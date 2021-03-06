'use strict';

var gulp = require('gulp');
var gulp_if = require('gulp-if');
var util = require('gulp-util');
var jest = require('jest-cli');

var uglify = require('gulp-uglify');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');

var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var _ = require('lodash');

var sourceFileFolder = './app';
var destFolder = './bundle';

gulp.task('default', ['browserify', 'watchify']);

gulp.task('test', function(done) {
  var options = { cache: true, config: jestConfig };
  if(getCommandLineOption('-s')) {
    options = Object.assign({}, {_:[getCommandLineOption('-s')]}, options);
  }
  jest.runCLI(options, ".", function(runSuccess) {
    if (runSuccess) {
      done();
    } else {
      done(new Error("Unit tests failed!"));
    }
  });
});

gulp.task('browserify', function() {
    var fileName = "index.js";
    var bundler = browserify(path.join(sourceFileFolder, fileName), {debug: getCommandLineFlag('-d')}).transform(babelify, {presets: ["react","es2015"]});
    return bundle_js(bundler, fileName, getCommandLineFlag('-d'));
});

gulp.task('watchify', function() {
    var fileName = "index.js";
    var bundler = watchify(browserify(path.join(sourceFileFolder, fileName), Object.assign({}, watchify.args, {debug: getCommandLineFlag("-d")}))).transform(babelify, {presets: ["react", "es2015"]});
    bundler.on('update', function () {
      bundle_js(bundler, fileName, getCommandLineFlag("-d"));
    });
    bundle_js(bundler, fileName, getCommandLineFlag("-d"));
});

var getCommandLineOption = function(flag) {
  var args = process.argv.slice(2);
  var index = _.findIndex(args, function(arg) { return arg === flag });
  if (index >= 0) {
    return args[index + 1];
  }
};

var getCommandLineFlag = function(flag) {
  var args = process.argv.slice(2);
  return _.findIndex(args, function(arg) { return arg === flag }) !== -1;
};

function bundle_js(bundler, fileName, debug) {
  console.log('Bundling ' + path.join(sourceFileFolder, fileName) + '...');
  return bundler
    .bundle()
    .on('error', error_handler)
    .pipe(source(fileName))
    .pipe(buffer())
    .pipe(gulp_if(debug, sourcemaps.init({loadMaps: true})))
    .pipe(gulp_if(!debug, uglify()))
    .pipe(gulp_if(debug, sourcemaps.write('./')))
    .pipe(gulp.dest(destFolder));
}

function error_handler(err) {
  if (err.fileName) {
    util.log('File Error: '
      + chalk.red(err.name)
      + ': '
      + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
      + ': '
      + 'Line '
      + chalk.magenta(err.lineNumber)
      + ' & '
      + 'Column '
      + chalk.magenta(err.columnNumber || err.column)
      + ': '
      + chalk.blue(err.description))
  } else {
    util.log('Browserify Error: '
      + chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message))
  }

  this.emit('end');
}

var jestConfig = {
  rootDir: 'app',
  "setupTestFrameworkScriptFile": "../jestSetup.js",
  "scriptPreprocessor": "../node_modules/babel-jest/src/index.js",
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  "testFileExtensions": [
    "js"
  ]
};