var gulp = require("gulp");
var tsc = require("gulp-typescript-compiler");
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var nodemon = require("gulp-nodemon");
/** gulp-bootstrap  */

var gulp = require('gulp');


var tsProject = ts.createProject('./tsconfig.json');

gulp.task("default", ["compile", "watch", "nodemon"]);


gulp.task("watch", function() {
    return gulp.watch(["./server/**/*.ts"], ["compile"]);
});


gulp.task("compile", function() {
    return gulp.src('server/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('dist/server'));

});

gulp.task("nodemon", function() {
    nodemon({
        script: "dist/server/www",
        // exec: ' ', // set DEBUG=*,-not_this &node --debug
        env: {
            'NODE_ENV': 'production'
        }

    });
});

gulp.task('minijs', function() {

    return gulp.src('dist/*.js')

    // .pipe(concat('main.js')) //合并所有js到main.js

    // .pipe(gulp.dest('minified/js')) //输出main.js到文件夹

    // .pipe(rename({ suffix: '.min' })) //rename压缩后的文件名

    .pipe(uglify()) //压缩

    .pipe(gulp.dest('dist/*.min.js')); //输出

});