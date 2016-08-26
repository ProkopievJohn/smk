var gulp = require('gulp'),
		prefix = require('gulp-autoprefixer'),
		cssMin = require('gulp-cssmin'),
		csscomb = require('gulp-csscomb'),
		wiredep = require('wiredep').stream,
		server = require('gulp-server-livereload'),
		concat = require('gulp-concat'),
		uncss = require('gulp-uncss'),
		jade = require('gulp-jade'),
		prettify = require('gulp-html-prettify'),
		uglify = require('gulp-uglify'),
		stylus = require('gulp-stylus'),
		ngmin = require('gulp-ngmin'),
		gulpif = require('gulp-if'),
		useref = require('gulp-useref'),
		rename = require('gulp-rename'),
		jsfiles = [
			'app/js/App.js',
			'app/js/**/*.js'
		];

//BOWER
gulp.task('bower', function () {
	gulp.src('app/*.html')
		.pipe(wiredep({
			directory : "app/bower_components"
		}))
		.pipe(gulp.dest('app'));
});

// JADE
gulp.task('jade', function () {
	// gulp.src(['jade/*.jade','!jade/index.jade'])
	// 	.pipe(jade())
	// 	.pipe(prettify({indent_char: '	', indent_size: 2}))
	// 	.pipe(gulp.dest('./views'));
});

// STYLUS
gulp.task('styl', function() {
	gulp.src('app/styl/*.styl')
		.pipe(stylus())
		.on('error', console.log)
		.pipe(prefix('last 2 versions', '> 1%', 'ie 9'))
		.pipe(concat('style.min.css'))
		.pipe(csscomb())
		.pipe(cssMin())
		.pipe(gulp.dest('app/public'));
});

// JAVASCRIPT
gulp.task('js', function () {
	gulp.src(jsfiles)
		.pipe(concat('script.min.js'))
		.pipe(ngmin())
		.pipe(uglify())
		.pipe(gulp.dest('app/public'));
});

//SERVER
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      // directoryListing: true,
      open: true
    }));
});

gulp.task('watch', function () {
	gulp.watch(['app/*.html','bower.json'],['bower'])
	gulp.watch(['app/jade/*.jade','app/jade/**/*.jade'],['jade']);
	gulp.watch(jsfiles,['js']);
	gulp.watch('app/styl/*.styl',['styl']);
});

gulp.task('default', ['watch', 'bower', 'jade', 'js', 'styl', 'webserver']);
