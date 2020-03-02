"use strict";
var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var uglify = require('gulp-uglify-es').default;
var cssmin 		= require('gulp-cssmin');
var rename 		= require('gulp-rename');
var find 		= require('gulp-find');
var replace 	= require('gulp-replace');
var concat 		= require('gulp-concat');
var concatCss 	= require('gulp-concat-css');


gulp.task('dist', function (done) {
  gulp.src('src/gooders.share.js')
    .pipe(rename("gooders.share.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
  done();     
});