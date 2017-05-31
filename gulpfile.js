var gulp = require('gulp'),
    base64 = require('gulp-base64'),
    concat = require('gulp-concat'),
    clean = require("gulp-clean"),
    minifyCss = require('gulp-minify-css'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector');
gulp.task('css', function () {
    return gulp.src('resources/css/*.css')
        .pipe(base64({
            extensions: ['png'],
            maxImageSize: 20 * 1024, // bytes
            debug: false
        })).pipe(minifyCss())
        .pipe(rev())
        .pipe(gulp.dest('dist/resources/css'))
        .pipe(rev.manifest(        .pipe(gulp.dest('dist/rev/css'));
});
gulp.task('js', function () {
    return gulp.src('resources/**/*.js').pipe(uglify({
        mangle: false, //类型：Boolean 默认：true 是否修改变量名
        compress: false, //类型：Boolean 默认：true 是否完全压缩
        preserveComments: false
    })).pipe(gulp.dest('dist/rev/css'));
});