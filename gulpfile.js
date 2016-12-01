var gulp          = require( 'gulp' );
var sass          = require( 'gulp-sass' );
var autoprefixer  = require( 'gulp-autoprefixer' );
var browserSync   = require( 'browser-sync' ).create();



gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
  .pipe( sass() )
  .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }) )
  .pipe(gulp.dest('app/css') )
  .pipe(browserSync.reload({
    stream: true
  }) )
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});


gulp.task('watch', function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
});


gulp.task('default', ['sass', 'watch', 'serve']);
