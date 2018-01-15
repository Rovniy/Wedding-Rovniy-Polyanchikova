var gulp = require('gulp'),
// common
    lr = require('tiny-lr'),
    livereload = require('gulp-livereload'),
    lec = require('gulp-line-ending-corrector'),
    concat = require('gulp-concat'),
    server = lr(),
    expect = require('gulp-expect-file'),
// css
    less = require('gulp-less'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
// js
    uglify = require('gulp-uglify'),
    fileinclude = require('gulp-file-include'),
    bower = require('gulp-bower'),
    angularFilesort = require('gulp-angular-filesort');

var express = require('express');
var vhost = require('vhost');
var proxyMiddleware = require('http-proxy-middleware');
var revHash = require('gulp-rev-hash');
var hash_src = require("gulp-hash-src");
var htmlmin = require('gulp-htmlmin');
var https = require('https');

var jsPaths = [
    'sites/src/libs/jquery-2.1.4.js',
    'sites/src/libs/jquery.validate.min.js',
    'sites/src/libs/jquery.masonarygrid.js',
    'sites/src/libs/jquery.final-countdown.js',
    'sites/src/libs/jquery.fancybox.js',
    'sites/src/libs/jquery.countdown.js',
    'sites/src/libs/bootstrap.js',
    'sites/src/libs/modernizr.custom.js',
    'sites/src/libs/jquery.dlmenu.js',
];

/**
 * Сборка Vendor JS
 */
gulp.task('js-vendor', function(){
    return gulp.src(jsPaths)
        .pipe(expect(jsPaths))
        .pipe(concat('vendor.js'))
        .pipe(lec({ eolc: 'LF', encoding:'utf8'}))
        .pipe(gulp.dest('./sites/src/js'))
});

/**
 * Сборка всего JS
 */
var jsGen = function(name){
    return function(){
        var gulpUrl = './assets/**/*.js',
            gulpDest = './sites/' + name + '/js';
        return gulp.src([gulpUrl])
            .pipe(angularFilesort())
            .pipe(concat('script.js'))
            .pipe(lec({eolc: 'LF', encoding:'utf8'}))
            .pipe(gulp.dest(gulpDest));
            //.pipe(livereload(server));
    };
};

gulp.task('js-stream', jsGen('wedding'));


/**
 * Сборка всего CSS + LESS
 */
var lessGen = function(name){
    return function (){
        var gulpSrc = './assets/css/_common.less',
            gulpDest = './sites/' + name + '/css';
        return gulp.src(gulpSrc)
            .pipe(less({compress: true}))
            .pipe(autoprefixer())
            .pipe(concat('style.css'))
            .pipe(lec({eolc: 'LF', encoding:'utf8'}))
            .pipe(gulp.dest(gulpDest));
            //.pipe(livereload(server));
    };
};
gulp.task('less-stream', lessGen('wedding'));


/**
 * Сборка всего HTML
 */
var htmlGen = function(name) {
    return function (){
        var gulpSrc = './assets/index.html',
            gulpDest = './sites/' + name;
        return gulp.src([gulpSrc])
            .pipe(fileinclude({
                prefix: '@@',
                basepath: '@file'
            }))
            .pipe(gulp.dest(gulpDest));
    }
};
gulp.task('html-stream', htmlGen('wedding'));

/**
 * Запуск bower install перед сборкой, что бы у всех всегда совпадали версии либ.
 */
gulp.task('bower', ['bower-prune'], function() {
    return bower();
});

gulp.task('bower-prune', function() {
    return bower({cmd: 'prune'});
});

gulp.task('wedding', [
    'js-stream', 'less-stream', 'html-stream'
]);
gulp.task('html', ['html-stream']);

gulp.task('build', ['wedding']);

var taskWatch = function(){
    gulp.run('build');
    gulp.watch(['./assets/**/*.html'], ['html-stream']);
    gulp.watch(['./assets/**/*.less'],['less-stream']);
    gulp.watch(['./assets/**/*.js'],['js-stream']);
};

// Watch
gulp.task('watch', function() {
    //livereload.listen();
    server.listen(35729, function(err) { //35729
        if (err) return console.log('ОШИБКА!!!!!',err);
        taskWatch()
    });
    gulp.run('local-serverRu');
});

// configure proxy middleware options
var options = {
    target: 'http://api.wedding.ru', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    secure: false,                   //for https
    onProxyRes: function(proxyRes, req, res) {
        var cook = proxyRes.headers['set-cookie'];

        if(cook!=undefined ) {
            if (cook[0].indexOf('PLAY_SESSION')>-1) {
                proxyRes.headers['set-cookie'] = cook[0].replace('Domain=.wedding.ru','Domain=.wedding.local');
                console.log('cookie created successfully');
            }
        }
    }
};

var proxy = proxyMiddleware(['/api','/wedding'], options);

var serverGen = function(proxy1, cb){
    var streamApp = expressFunc('wedding');

    return function() {
        express()
            .use('/src', express.static('./sites/src'))
            .use(proxy1).on('upgrade', proxy1.upgrade)
            .use(vhost('wedding.local', streamApp))
            .listen(9360);
        cb()
    };

    function expressFunc(name) {
        return express()
            .use(express.static('./sites/' + name))
            .get('/*', function(req, res, next) {
                if (req.path.indexOf('/src') > -1) return next();
                res.sendFile("index.html", {"root": __dirname + '/sites/' + name});
            })
    }
};

// Local server
gulp.task('local-serverRu', serverGen(proxy, function(){}));

// Default
gulp.task('default', function() {
    gulp.run('watch');
});