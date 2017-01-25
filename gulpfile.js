var gulp = require("gulp"),
    less = require('gulp-less'),
    path = require('path'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

var LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({browsers: ['last 2 versions', 'Android >= 4.0'], cascade: true});


gulp.task('less', function () {
    gulp.src('./less/mbank.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'include')],
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./public/css'))
        .pipe(connect.reload());
});

gulp.task('htmlreload',function () {
    gulp.src('./public/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', ['server'], function () {
    gulp.watch('less/**/*.less', ['less']);
    gulp.watch(['./public/*.html'], ['htmlreload']);
});


gulp.task('server', function () {
    connect.server({
        root: 'public',
        port: 9999,
        livereload: true
    });
});

gulp.task('default', [ 'server', 'watch']);