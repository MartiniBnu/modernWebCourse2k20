const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(cb) {
  // O proprio config json irá dizer quais arquivos baixar do src
  return tsProject.src()
      .pipe(tsProject())
      /* Finalmente gerar na pasta final */
      .pipe(gulp.dest('build'))

  return cb()
}

exports.default = series(transformacaoTS)