const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      sass = require('gulp-sass'),
      gulpJade = require('gulp-jade'),
      jade = require('jade'),
      imagemin = require('gulp-imagemin'),
      prefix = require('gulp-autoprefixer'),
      browserSync = require('browser-sync')
      reload  = browserSync.reload;
      babel = require('gulp-babel')

// this function runs when there's an error, and gives a descriptive message.
// (the error messages are commented out below, in case I want to use them later
// instead of plumber)
function errorLog(error) {
    console.error.bind(error)
    this.emit('end')
}


// scripts task   (this doesn't work because Im using Angular and it needs pure javascript)
// uglifies
// gulp.task('scripts', function() {
//     // load the files
//     gulp.src('public/javascripts/*.js')
//         // uglify them
//         .pipe(uglify())
//         .on('error', errorLog)
//         // and save them in minjs
//         .pipe(gulp.dest('build/js'))
// })

// image task compresses images. have it overwriting the image with the compressed one, but
// you could have it saving to another folder to save both copies.
gulp.task('image', function() {
    gulp.src('public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
})


// styles task. prefix() slaps a browser prefix to css elements that need it. you can
// specify what version you want to use in the prefix() function.
// .pipe(sass can take some commands in an object format, or you can leave it empty
gulp.task('sass', function() {
    return gulp.src('src/stylesSass/*.scss')
               .pipe(sass({
                    outputStyle: 'expanded'
                }))
               // .on('error', sass.logError)
               // or this for errors. this fires the function above if there's an error.
               // only works if plumber is not installed.
               .on('error', errorLog)
               .pipe(prefix())
               .pipe(gulp.dest('public/stylesheets/'))
               .pipe(reload({stream: true}))
})


// converts jade into html
gulp.task('jade', function () {
    return gulp.src('src/**/*.jade')
                .pipe(gulpJade({
                    // jade: jade,
                    pretty: true,
                    doctype: 'html'
                }))
                .pipe(gulp.dest('public/'))
                .pipe(reload({stream: true}))
})


// server here needs to be pointed at index.html
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './public'
    });

    gulp.watch("src/stylesSass/*.scss", ['sass']);
})


// using babel to write ES6
gulp.task('babelify', function(){
    return gulp.src('build/javascripts/main.js')
    .pipe(babel({
        presets : ['es2015']
    }))
    .pipe(gulp.dest('app/assets/javascripts/'));
})

// 'watch' task runs the task in brackets anytime a file has been changed and saved
gulp.task('watch', function() {
    gulp.watch('src/**/*', ['jade'])
    gulp.watch('public/images/*', ['image'])
    gulp.watch('js/*.js', ['scripts'])
    gulp.watch('src/stylesSass/*.scss', ['sass'])
})


// made an array here of all the tasks I want to run when I just type 'gulp' at the CL.
gulp.task('default', ['babelify', 'image', 'sass', 'jade', 'serve', 'watch'])



