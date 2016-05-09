/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    lec = require('gulp-line-ending-corrector'),
    jade = require('gulp-jade');

gulp.task('default', function() {
  gulp.start('styles', 'html');
});

gulp.task('styles', function() {
  return sass('scss/style.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(lec({verbose:true, eolc: 'CRLF', encoding:'utf-8'}))
    .pipe(gulp.dest('css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('html', function() {
  return gulp.src('templates/**/!(_)*.jade')
      .pipe(jade({
        pretty:true
      }))
      .pipe(lec({verbose:true, eolc: 'CRLF', encoding:'utf-8'}))
      .pipe(gulp.dest(''))
      .pipe(notify({ message: 'HTML task complete' }));
});


gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['styles']);
  gulp.watch('templates/**/*.jade', ['html']);
});
