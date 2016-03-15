const gulp = require('gulp'),
    uglify = require('gulp-uglify')

gulp.task('default', function() {
    // load the files
    gulp.src('public/javascripts/*.js')
        // uglify them
        .pipe(uglify())
        // and save them in minjs
        .pipe(gulp.dest('minjs'))
})
