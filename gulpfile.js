var gulp = require('gulp');

//Plugins
var sass = require('gulp-sass');
var less = require('gulp-less');

gulp.task('sass', function () {
    return gulp.src('sass/bootstrap-sass/bootstrap.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/bootstrap-sass.min.css'));
    }
)

gulp.task('less', function () {
    return gulp.src('less/bootstrap-less/bootstrap.less')
        .pipe(less())
        .pipe(gulp.dest('css/bootstrap-less.min.css'));
    }
)

gulp.task('watch', function(){
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('less/*.less', ['less']);
})