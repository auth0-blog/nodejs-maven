var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

gulp.task('clean', function () {
	return gulp.src([
		'./src/main/resources/static/**/*.js',
		'./src/main/web/templates.js'
	], {read: false})
		.pipe(clean());
});

gulp.task('default', function () {
	var uglifyFlag = util.env.envName === 'production';

	return gulp.src([
		'./src/main/web/app-definition.js',
		'./src/main/web/**/!(app-definition)*.js'
	])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(gulpif(uglifyFlag, uglify({mangle: true})))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./src/main/resources/static/js/'));
});

gulp.task('watch', ['default'], function () {
	gulp.watch(['./src/main/web/**/*'], ['default']);
});
