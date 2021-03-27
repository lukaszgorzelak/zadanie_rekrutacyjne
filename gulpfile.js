const gulp = require("gulp");
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('scss/style.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest('css'))
})
sass({
  style: 'expanded'
})

gulp.task('browser-sync', function(){

  // note the .init

  browserSync.init({
      server: {
          //baseDir: 'app'
          baseDir: './'
      },
      notify:false
  })
});

  gulp.task("watch", function(){
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
    gulp.watch('*.html', browserSync.reload);
  });

 
 

