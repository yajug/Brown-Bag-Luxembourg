var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var bower = require('gulp-bower');


var connect = require('gulp-connect');

var app = {
    src: {
        html: ['src/**/*.html'],
        js: ['src/js/**/*.html']
    }
};

// Dev server
gulp.task('connect', function () {
    connect.server({
        root: 'src/',
        port: 8080
    });
});


gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest('bower_components')) 
});

// Watch for changes
gulp.task('watch', function () {
    gulp.watch(app.src.html, ['html']);
    gulp.watch(app.src.js);
});

// Html file task
gulp.task('html', function () {
    gulp.src(app.src.html)
        .pipe(connect.reload())
});


gulp.task('deploy', function() {
  return gulp.src('./src/**/*')
    .pipe(ghPages());
});



// Default task
gulp.task('default', ['connect', 'watch']);