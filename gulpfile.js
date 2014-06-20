
// Include gulp
var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');

// Set up paths
var scssGlob = 'scss/*.scss';

// CSS task
gulp.task('css', function() {
    return gulp.src(scssGlob)
        .pipe(sass())
        .pipe(prefixer())
        .pipe(gulp.dest('public/assets/css'));
});

// Watch task
gulp.task('watch', function() {
    gulp.watch(scssGlob, ['css']);
});

// Default task
gulp.task('default', ['watch']);
