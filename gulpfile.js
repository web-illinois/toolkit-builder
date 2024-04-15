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
  return gulp.src('./homepage/environments/*.json')
    .pipe(concat('environmentsPartial.txt', {newLine: ','}))
    .pipe(gulp.dest('./homepage/array'));
});

gulp.task('array-environments', () => {
  return gulp.src(['./homepage/array/start.txt', './homepage/array/environmentsPartial.txt', './homepage/array/end.txt'])
    .pipe(concat('environments.json'))
    .pipe(gulp.dest('./homepage/_data'));
});

gulp.task('javascript', () => {
  return gulp.src(['./site/scripts/clipboard.js', './site/scripts/component.js', './site/scripts/codepen.js'])
    .pipe(concat('main.js'))
//    .pipe(uglify())
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


gulp.task('json-copy-homepage', () => {
  return gulp.src(['./homepage/_data/*.json'])
    .pipe(gulp.dest('./homepage/data'));
});

gulp.task("site", gulp.series(["javascript", "javascript-preview", "concat-components", "array-components", "json-copy"]));

gulp.task("homepage", gulp.series(["concat-environments", "array-environments", "json-copy-homepage"]));

gulp.task("default", gulp.series(["site", "homepage"]));
