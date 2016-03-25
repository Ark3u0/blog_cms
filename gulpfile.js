'use strict';

var gulp = require('gulp');
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

var sourceFileFolder = './app';
var destFolder = './bundle';

gulp.task('default', ['browserify', 'watchify']);

function getFolders() {
  return fs.readdirSync(sourceFileFolder)
    .filter(function(file) {
      return fs.statSync(path.join(sourceFileFolder, file)).isDirectory();
    });
}

function getIndex(dirName) {
  return fs.readdirSync(path.join(sourceFileFolder, dirName))
    .filter(function(file) {
      return file.indexOf("index") > -1;
    }).shift();
}

gulp.task('browserify', function() {
    var fileName = 'viewer_index.js';
    var bundler = browserify(path.join(sourceFileFolder, fileName)).transform(babelify, {presets: ["react","es2015"]});
    return bundle_js(bundler, fileName, "");
});

gulp.task('watchify', function() {
  var fileName = 'viewer_index.js';
  var bundler = watchify(browserify(path.join(sourceFileFolder, fileName), watchify.args)).transform(babelify, {presets: ["react", "es2015"]});
  bundler.on('update', function() {
    bundle_js(bundler, fileName, "")
  });
  bundler.bundle().pipe(fs.createWriteStream(path.join(destFolder, fileName)));
});


gulp.task('browserify-all', function() {
  getFolders().map(function (dirName) {
    var fileName = getIndex(dirName);
    if(fileName) {
      var bundler = browserify(path.join(sourceFileFolder, dirName, fileName)).transform(babelify, {presets: ["react","es2015"]});
      return bundle_js(bundler, fileName, dirName);
    }
  });
});


gulp.task('watchify-all', function () {
  return getFolders().map(function (dirName) {
    var fileName = getIndex(dirName);
    if(fileName) {
      var bundler = watchify(browserify(path.join(sourceFileFolder, dirName, fileName), watchify.args)).transform(babelify, {presets: ["react", "es2015"]});
      bundler.on('update', function() {
        bundle_js(bundler, fileName, dirName)
      });
      bundler.bundle().pipe(fs.createWriteStream(path.join(destFolder, fileName)));
    }
  });
});

var getCommandLineOption = function(flag) {
  var args = process.argv.slice(2);
  if (flag == args[1]) {
    return process.argv.slice(2)[2];
  }
};

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

gulp.task('browserify-debug', function() {
  var fileName = 'viewer_index.js';
  var bundler = browserify(path.join(sourceFileFolder, fileName), {debug: true}).transform(babelify, {presets: ["react","es2015"]});
  return bundle_js_debug(bundler, fileName, "");
});

function bundle_js_debug(bundler, fileName, dirName) {
  console.log('Bundling ' + path.join(sourceFileFolder, dirName, fileName) + '...');
  return bundler
    .bundle()
    .on('error', error_handler)
    .pipe(source(fileName))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(destFolder));
}

function bundle_js(bundler, fileName, dirName) {
  console.log('Bundling ' + path.join(sourceFileFolder, dirName, fileName) + '...');
  return bundler
    .bundle()
    .on('error', error_handler)
    .pipe(source(fileName))
    .pipe(buffer())
    .pipe(uglify())
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