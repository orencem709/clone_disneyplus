const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles () {
    return gulp.src("./srs/styles/*.scss")
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(gulp.dest("./dist/styles/css"));
}

function watch() {
    gulp.watch("./srs/styles/*.scss", gulp.parallel(styles));
}

exports.default = gulp.parallel(styles, watch);
exports.build = styles;
exports.watch = watch;