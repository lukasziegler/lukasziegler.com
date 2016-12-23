'use strict'

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var path = {
  html: '*.html',
  js: 'js/**/*.js',
  styles: 'css/**/*.styl',
  outputCss: 'css',
  img: 'img'
};

gulp.task('styles', function () {
  gulp.src(path.styles)
    .pipe(sourcemaps.init())
    .pipe(stylus({
      paths: ['node_modules'],
      import: ['rupture/rupture'],
      'include css': true,
      compress: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.outputCss))
    .pipe(browserSync.stream());
});

gulp.task('observeFiles', function () {
  gulp.watch(path.styles, ['styles']);
  gulp.watch(path.html).on('change', reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: true
  });
});

gulp.task('default', ['styles', 'observeFiles', 'browserSync']);
gulp.task('watch', ['styles', 'observeFiles']);