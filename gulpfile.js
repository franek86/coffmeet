var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    concat  = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    browserSync  = require('browser-sync').create(),
    reload  =   browserSync.reload,
    sass  = require('gulp-sass'),
    prefix  = require('gulp-autoprefixer');

gulp.task('jshint', function(){
    gulp.src('src/assets/js/main.js')
    .pipe(jshint)
    .pipe(jshint.reporter('default'));
});

// All Javascrips libraries, jQuery,angularjs,angular-route,ngstorage and bootstrap compile in the one script deps.js
gulp.task('libs', function(){
   gulp.src([
       'bower_components/jquery/dist/jquery.min.js',
       'bower_components/angular/angular.min.js',
       'bower_components/angular-route/angular-route.min.js',
       'bower_components/ngstorage/ngStorage.min.js',
       'bower_components/bootstrap/dist/js/bootstrap.min.js'
   ])
   .pipe(concat('deps.js'))
   .pipe(gulp.dest('src/assets/js'));
});

//Concat Angular controllers, directives, modules and json file in dev.js
gulp.task('allAngular', function(){
  gulp.src([
    'src/assets/js/module/*.js',
    'src/assets/js/controllers/*.js',
    'src/assets/js/directives/*.js'
  ])
  .pipe(concat('dev.js'))
  .pipe(gulp.dest('src/assets/js'));
});

// Bootstrap and font-awesome css compile in deps.css
gulp.task('cssLibs', function(){
  gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.min.css'
  ])
  .pipe(concat('deps.css'))
  .pipe(gulp.dest('src/assets/css'));
});

//Minify Main Style
gulp.task('minify-css', function(){
  return gulp.src('src/assets/css/coffmeet.css')
    .pipe(minifyCss({keepSpecialComments: 1}))
    .pipe(gulp.dest('src/assets/css'));
});

// All SASS imports to SCSS and compile to CSS
gulp.task('sass', function(){
  gulp.src('src/assets/css/coffmeet.scss')
  .pipe(sass({
    includePaths: ['css'],
    style: 'compressed'
  }))
  .on('error', console.error.bind(console))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
  .pipe(gulp.dest('src/assets/css'))
  .pipe(browserSync.reload({stream: true}));
});

// Gulp server run
gulp.task('serve', function(){
   browserSync.init({
       server:"./"
   });

   gulp.watch('./assets/css/**', ['sass']);
   gulp.watch('./assets/js/**', ['allAngular']);
   gulp.watch('./templates/*.html');
});


// Default gulp task
gulp.task('default', ['sass', 'serve']);
