const gulp = require("gulp");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

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

gulp.task('javascript', () => {
  return gulp.src(['./site/scripts/clipboard.js', './site/scripts/component.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./site/scripts'));
});

gulp.task('javascript-preview', () => {
  return gulp.src(['./site/scripts/clipboard.js', './site/scripts/preview.js'])
    .pipe(concat('main-preview.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./site/scripts'));
});

gulp.task('json-copy', () => {
  return gulp.src(['./site/_data/*.json'])
    .pipe(gulp.dest('./site/data'));
});

gulp.task("default", gulp.series(["javascript", "javascript-preview", "concat-components", "array-components", "concat-environments", "array-environments", "json-copy"]));