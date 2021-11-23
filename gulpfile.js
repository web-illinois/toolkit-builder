var gulp = require("gulp");
const jsonConcat = require('gulp-json-concat');
const concat = require('gulp-concat');


gulp.task('concat-components', () => {
    return gulp.src('./site/components/*.json')
      .pipe(concat('componentsPartial.txt', {newLine: ','}))
      .pipe(gulp.dest('./site/array'));
  
  });

  gulp.task('array-components', () => {
    return gulp.src(['./site/array/start.txt', './site/array/componentsPartial.txt', './site/array/end.txt'])
      .pipe(concat('components.json'))
      .pipe(gulp.dest('./site/_data'));
  
  });

  gulp.task('concat-environments', () => {
    return gulp.src('./site/environments/*.json')
      .pipe(concat('environmentsPartial.txt', {newLine: ','}))
      .pipe(gulp.dest('./site/array'));
  
  });

  gulp.task('array-environments', () => {
    return gulp.src(['./site/array/start.txt', './site/array/environmentsPartial.txt', './site/array/end.txt'])
      .pipe(concat('environments.json'))
      .pipe(gulp.dest('./site/_data'));
  
  });

gulp.task("default", gulp.series(["concat-components", "array-components", "concat-environments", "array-environments"]));