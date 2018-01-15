const cleanCss = require('gulp-clean-css')
const gulp = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')

gulp.task('default', ['fonts', 'stylesheet'])

gulp.task('fonts', function () {
    return gulp.src('./node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('./assets/fonts/'))
})

gulp.task('stylesheet', function () {
    return gulp.src('./assets/stylesheets/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('index.bundle.css'))
        .pipe(gulp.dest('./assets/stylesheets/'))
        .pipe(cleanCss())
        .pipe(rename('index.bundle.min.css'))
        .pipe(gulp.dest('./assets/stylesheets/'))
})

gulp.task('watch', ['default'], function () {
    gulp.watch('./assets/stylesheets/**/*.scss', ['stylesheet'])
})
