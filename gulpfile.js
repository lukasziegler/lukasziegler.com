/*jslint node: true */
'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var pug = require('gulp-pug');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var path = {
  html: '*.html',
  pug: '*.pug',
  js: 'js/**/*.js',
  stylesWatch: 'styles/**/*.styl',
  stylesInput: 'styles/styles.styl',
  output: 'docs',
  img: 'docs/img'
};

gulp.task('styles', function () {
  gulp.src(path.stylesInput)
    .pipe(sourcemaps.init())
    .pipe(stylus({
      paths: ['node_modules'],
      'include css': true,
      compress: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.output))
    .pipe(browserSync.stream());
});

gulp.task('minify', function () {
  return gulp.src(path.pug)
    .pipe(pug())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(path.output));
});

gulp.task('observeFiles', function () {
  gulp.watch(path.stylesWatch, ['styles']);
  gulp.watch(path.pug, ['minify']);
  gulp.watch(path.pug).on('change', reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: path.output,
      index: 'index.html'
    }
  });
});

gulp.task('build', ['styles', 'minify']);
gulp.task('default', ['build', 'observeFiles', 'browserSync']);
