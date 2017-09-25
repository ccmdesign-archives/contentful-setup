'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    proxy: 'http://localhost:3000',
    port: '3030',
    open: false
  });

  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/views/*.liquid').on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
