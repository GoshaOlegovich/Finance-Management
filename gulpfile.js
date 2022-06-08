
const gulp = require('gulp');

//Css
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

//Js
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

//Other
const tinypng = require('gulp-tinypng-compress');

const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();





var plugins = [
    autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }),
    cssnano()
];



function minJs() {
    return gulp.src(['src/script/*.js'])
    .pipe(uglify())
    .pipe(concat('min.js'))
    .pipe(gulp.dest('./prod/script'))
    .pipe(browserSync.stream());
}


function include() {
    return gulp.src(['src/html/index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./prod'))
        .pipe(browserSync.stream());
}




function PostStyle() {
    return gulp.src('./dest/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./prod/src/css'))
        .pipe(browserSync.stream());
}



function style() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./prod/src/css'))
        .pipe(browserSync.stream());
}



function minImg() {
    return gulp.src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: '6DDcLV9wZXw3hbTLWl2n2Y16nhMjVxDw',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('./prod/img'));
}





function watch() {
    browserSync.init({
        server: {
            baseDir: "prod"
        }
    });
    gulp.watch("src/scss/**/*.scss", style)
    gulp.watch("src/script/**/*.js", minJs)
    gulp.watch("src/html/**/*.html", include).on('change', browserSync.reload)

}




function Dtask() {
    include()
    style()
    watch();
    
}


exports.minImg = minImg
exports.default = Dtask