const gulp = require('gulp')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
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
    gulp.src('public/stylesheets/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets/'))
    // .pipe(browserSync.reload({
    //     stream: true
    // }))
})

// 'watch' task runs the scripts task anytime a js file has been changed and saved
gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('js/*.js', ['scripts'])
    gulp.watch('public/**/*.scss', ['sass'])
})

// // reloads browser when there's changes
// gulp.task('browserSync', function() {
//     browserSync.init({
//         server: {
//             baseDir: '/'
//         },
//     })
// })

gulp.task('jade', function () {
    return gulp.src('views/*.jade')
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
    .pipe(gulp.dest('public/html-partials'))
});

// made an array here of all the tasks I want to run when I just type 'gulp' at the CL.
gulp.task('default', ['sass', 'watch', 'browserSync', 'jade'])
