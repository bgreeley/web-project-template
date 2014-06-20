
// Include gulp
var gulp = require('gulp');

// Include plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');

// Set up paths
var jsGlob = 'js/*.js';
var jsOutput = 'public/assets/js';
var scssGlob = 'scss/*.scss';
var scssOutput = 'public/assets/css';

// JS task
gulp.task('js', function() {
    return gulp.src(jsGlob)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsOutput));
});

// CSS task
gulp.task('css', function() {
    return gulp.src(scssGlob)
        .pipe(sass())
        .pipe(prefixer())
        .pipe(gulp.dest(scssOutput));
});

// Watch task
gulp.task('watch', function() {
    gulp.watch(jsGlob, ['js']);
    gulp.watch(scssGlob, ['css']);
});

// Default task
gulp.task('default', ['watch']);
