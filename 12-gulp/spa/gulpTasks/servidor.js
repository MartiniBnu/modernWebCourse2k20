const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')
const GulpClient = require('gulp')


function monitorarArquivos(cb) {
  
  watch('src/**/*.html', () => GulpClient.series('appHtml')())
  watch('src/**/*.scss', () => GulpClient.series('appCss')())
  watch('src/**/*.js', () => GulpClient.series('appJS')())
  watch('src/assets/imgs/**/*.*', () => GulpClient.series('appIMG')())
  
  
  return cb()
}

function servidor() {
  return gulp.src('build')
    .pipe(webserver({
      port: 8080,
      open: true,
      livereload: true
    }))
}

module.exports = {
  monitorarArquivos,
  servidor
}