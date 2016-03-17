const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      sass = require('gulp-sass'),
      gulpJade = require('gulp-jade'),
      jade = require('jade'),
      livereload = require('gulp-livereload')
      imagemin = require('gulp-imagemin'),
      prefix = require('gulp-autoprefixer')

// this function runs when there's an error, and gives a descriptive message.
// (the error messages are commented out below, in case I want to use them later
// instead of plumber)
function errorLog(error) {
    console.error.bind(error)
    this.emit('end')
}


// scripts task
// uglifies
gulp.task('scripts', function() {
    // load the files
    gulp.src('public/javascripts/*.js')
        // uglify them
        .pipe(uglify())
        .on('error', errorLog)
        // and save them in minjs
        .pipe(gulp.dest('build/js'))
})

// image task compresses images. have it overwriting the image with the compressed one, but
// you could have it saving to another folder to save both copies.
gulp.task('image', function() {
    gulp.src('public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images  '))
})


// styles task. prefix() slaps a browser prefix to css elements that need it. you can
// specify what version you want to use in the prefix() function.
// .pipe(sass can take some commands in an object format, or you can leave it empty
gulp.task('sass', function() {
    return gulp.src('public/stylesheets/*.scss')
               .pipe(sass({
                    outputStyle: 'expanded'
                }))
               // .on('error', sass.logError)
               // or this for errors. this fires the function above if there's an error.
               // only works if plumber is not installed.
               .on('error', errorLog)
               .pipe(prefix())
               .pipe(gulp.dest('public/stylesheets/'))
               .pipe(livereload())
})

// converts jade into html
gulp.task('jade', function () {
    return gulp.src('src/**/*.jade')
                .pipe(gulpJade({
                    jade: jade,
                    pretty: true
                }))
            .pipe(gulp.dest('public/'))
            .pipe(livereload())
})

// 'watch' task runs the task in brackets anytime a file has been changed and saved
gulp.task('watch', function() {

    livereload.listen()

    gulp.watch('src/**/*', ['jade'])
    gulp.watch('public/images/*', ['image'])
    gulp.watch('js/*.js', ['scripts'])
    gulp.watch('public/**/*.scss', ['sass'])
})


// made an array here of all the tasks I want to run when I just type 'gulp' at the CL.
gulp.task('default', ['image', 'sass', 'jade', 'watch'])
