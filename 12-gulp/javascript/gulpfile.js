const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {

  gulp.src('src/**/*.js')
      /* Traduzir o código para o JS mais recente */
      .pipe(babel({
        comments: false,
        presets: ["env"] // Js mais novo possível
      }))
      /* Minimizar o fonte, trazendo somente uma linha de código */
      .pipe(uglify())
      /* Caso aconteça um erro */
      .on('error', err => console.log(err))      
      /* Concatenar todo o resultado acima para um novo arquivo */
      .pipe(concat('codigo.min.js'))
      /* Finalmente gerar na pasta final */
      .pipe(gulp.dest('build'))

  return cb()
}

function fim(cb) {
  console.log('Fim!!!')
  return cb()
}

exports.default = parallel(transformacaoJS, fim)