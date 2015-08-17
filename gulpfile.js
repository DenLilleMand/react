var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var del = require('del');
var babelify = require('babelify');
var concat = require('gulp-concat');


gulp.task('browserify', function(){
  browserify('./client/js/index.js')
  .transform(babelify.configure({
    stage:0
  }))
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

gulp.task('copy-css', function() {
	return gulp.src('./client/css/**/*.css')
	.pipe(gulp.dest('./build/css'));
});
gulp.task('assets', function() {
	return gulp.src('./client/assets/**/*.*')
	.pipe(gulp.dest('./build/assets'));
});



gulp.task('default',['clean'] ,function(callback) {
  runSequence(['browserify', 'less','copy-css','assets', 'watch'], callback);
});


gulp.task('clean', function() {
	clean('./build/**/*.*');
});


//functions
function clean(path,done) {
  del(path,done);
}
