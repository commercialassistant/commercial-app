//imports
var gulp = require('gulp'); //fichero principal gulp
var gutil = require('gulp-util'); //algunas utilidades básicas de gulp
var runSequence = require('run-sequence'); //permite ejecutar tareas de manera sincrona o asincrona a voluntad
var babel = require('gulp-babel'); //pasa de js6 a js5 para compatibilidad con navegadores
//end

//consts
var JSPATH='src/**/*.js';
var CSSPATH='src/**/*.css';
var DEV_TASK=['babel'];
//end

//tasks
gulp.task('default',['dev']);
gulp.task('production',production);
gulp.task('dev',dev);
gulp.task('js6to5',js6to5);
gulp.task('inject-js',injectJS);
gulp.task('min-js',minJS);
gulp.task('inject-css',injectCSS);
gulp.task('min-css',minCSS);
gulp.task('min-html',minHTML);
gulp.task('init-server',initServer);
gulp.task('refresh',refresh);
//end

//functions
function dev(){
  runSequence(
    'js6to5' //first task
  );
}
function production(){

}
function js6to5(){
  return gulp.src(JSPATH)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('wwwp/js/'));
}
function injectJS(){

}
function minJS(){

}
function injectCSS(){

}
function minCSS(){

}
function minHTML(){

}
function initServer(){

}
function refresh(){

}
//end
