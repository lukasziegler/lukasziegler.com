var os = require('os');
var gulp = require('gulp');
var open = require('gulp-open');

gulp.task('default', function () {
  gulp.start('watch');
});

gulp.task('watch', function () {
  gulp.src('./index.html')
    .pipe(open());
});