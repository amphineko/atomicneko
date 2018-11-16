const cleanCss = require('gulp-clean-css')
const gulp = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')

gulp.task('stylesheet', function () {
    return gulp.src('./assets/stylesheets/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('index.bundle.css'))
        .pipe(gulp.dest('./assets/stylesheets/'))
        .pipe(cleanCss({
            level: 2
        }))
        .pipe(rename('index.bundle.min.css'))
        .pipe(gulp.dest('./assets/stylesheets/'))
})

gulp.task('default', gulp.series('stylesheet'))

gulp.task('watch', gulp.series('default', function () {
    gulp.watch('./assets/stylesheets/**/*.scss', gulp.series('stylesheet'))
}))
