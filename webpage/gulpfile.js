var gulp = require('gulp');

var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass:development', function() {
  var task = gulp

    .src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));

  return task;
});

gulp.task('watch', ['sass:development'], function() {
  gulp.watch('./sass/**/*.scss', ['sass:development']);
});

gulp.task('default', ['watch']);
