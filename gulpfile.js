var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var del = require('del');
var babelify = require('babelify');


gulp.task('browserify', function(){
  browserify('./client/js/Application.js')
  .transform('babelify')
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build/js/'));
});


gulp.task('less', function(){
	gulp.src('./client/css/**/*.less')
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./build/css/'));
});

gulp.task('watch', function(){
  gulp.watch('./client/**/*.*',['default']);

});

gulp.task('copy', function() {
	return gulp.src('./client/css/**/*.css')
	.pipe(gulp.dest('./build/css'));
});


gulp.task('vendor', function(){

});

gulp.task('default',['clean'] ,function(callback) {
  runSequence(['browserify', 'less','copy', 'vendor', 'watch'], callback);
});


gulp.task('clean', function() {
	clean('./build/**/*.*');
});


//functions
function clean(path,done) {
  del(path,done);
}
