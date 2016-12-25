/*jslint node: true */
'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var path = {
  html: '*.html',
  js: 'js/**/*.js',
  styles: 'styles/**/*.styl',
  output: 'www',
  img: 'www/img'
};

gulp.task('styles', function () {
  gulp.src(path.styles)
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
  return gulp.src(path.html)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(path.output));
});

gulp.task('observeFiles', function () {
  gulp.watch(path.styles, ['styles']);
  gulp.watch(path.html, ['minify']);
  gulp.watch(path.html).on('change', reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'www',
      index: 'index.html'
    }
  });
});

gulp.task('build', ['styles', 'minify']);
gulp.task('default', ['build', 'observeFiles', 'browserSync']);