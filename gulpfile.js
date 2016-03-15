const gulp = require('gulp')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const gulpJade = require('gulp-jade')
const jade = require('jade')

// scripts task
// uglifies
gulp.task('scripts', function() {
    // load the files
    gulp.src('public/javascripts/*.js')
    // uglify them
    .pipe(uglify())
    // and save them in minjs
    .pipe(gulp.dest('build/js'))
})

// styles task
// .pipe(sass can take some commands in an object format, or you can leave it empty
gulp.task('sass', function() {
    return gulp.src('public/stylesheets/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .on('error', sass.logError)
        .pipe(gulp.dest('public/stylesheets/'))
})

// 'watch' task runs the scripts task anytime a js file has been changed and saved
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts'])
    gulp.watch('public/**/*.scss', ['sass'])
})

gulp.task('jade', function () {
    return gulp.src('src/**/*.jade')
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
    .pipe(gulp.dest('public/'))
});

// made an array here of all the tasks I want to run when I just type 'gulp' at the CL.
gulp.task('default', ['sass', 'watch', 'jade'])
