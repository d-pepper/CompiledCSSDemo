var gulp = require('gulp');

//Plugins
var sass = require('gulp-sass');
var less = require('gulp-less');

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
    }
)

gulp.task('less', function () {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
    }
)

gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('less/*.less', ['less']);
})