var gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');

var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'include') ],
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./public/css'));
});