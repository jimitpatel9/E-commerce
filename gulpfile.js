var gulp = require('gulp');
var inject = require('gulp-inject');
var sass=require('gulp-sass');
var config = require('./gulp.config')();
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('wiredep', function () {
    var options= config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream;
    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe(inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});
gulp.task('convert',function(){
    return gulp
        .src('./css/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});
gulp.task('sass:watch', function () {
    gulp.watch('./css/*.scss', ['convert']);
});