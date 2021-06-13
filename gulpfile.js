const {task,src,dest,watch,series } = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const path = require('path');
const concatCss = require('gulp-concat-css');

exports.less=function() {
    return src('./less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(concatCss("main.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
};
exports.lessWatch=function(){
    watch('./less/*.less', series('less'));
};
