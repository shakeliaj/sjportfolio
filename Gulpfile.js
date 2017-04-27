var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var karma = require('karma');

gulp.task('sass', function () {
    gulp.src('app/scss/portfoliostyle.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({
          includePaths: [
            './app/js/components/',
            './node_modules/'
          ]
        }))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./app/public/css'));
});
gulp.task('default', ['watch', 'test']);

gulp.task('build', function () {
    return browserify('./app/portfolio.js')
    .bundle()
    .pipe(source('./app/portfolio.js'))
    .pipe(buffer())
    .pipe(rename('wholePortfolio.js'))
    .pipe(gulp.dest('./app/public/js'))
    .pipe(livereload());
});

gulp.task('watch', function () {
    //watch js changes
    gulp.watch(['./app/**/*.js','./app/js/components/**/*!(spec).js'], ['build']);
    //watch scss changes
    gulp.watch(['./app/**/*.scss','./app/js/components/**/*.scss'], ['sass']);
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    return new karma.Server({
            configFile:  __dirname + '/karma.conf.js',
            action: 'run',
            singleRun: true,
            autoWatch: false,
            reporters: ['spec', 'coverage'],
            coverageReporter: {
              reporters: [{
                  type: 'html',
                  dir: 'coverage/'
              }, {
                  type: 'lcov',
                  dir: 'coverage/lcov/',
                  file: 'coverage.txt'
              }]
            }
        }, done).on('error', function(err) {
           throw err;
       }).start();
});

gulp.task('autotest', function (done) {
  return new karma.Server({
          configFile:  __dirname + '/karma.conf.js',
          action: 'run',
          singleRun: false,
          autoWatch: true,
          reporters: ['spec', 'coverage'],
          coverageReporter: {
            reporters: [{
                type: 'html',
                dir: 'coverage/'
            }, {
                type: 'lcov',
                dir: 'coverage/lcov/',
                file: 'coverage.txt'
            }]
          }
      }, done).on('error', function(err) {
         throw err;
     }).start();
});
