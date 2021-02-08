const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

const antes1 = cb => {
  console.log('Tarefa Antes 1!!!')
  return cb()
}

const antes2 = cb => {
  console.log('Tarefa Antes 2!!!')
  return cb()
}


function copiar(cb) {
  //console.log('Tarefa de Copiar!')

  //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  
  // Pega tudo da pasta, desde que sua extensão seja .txt
  gulp.src('pastaA/**/*.txt')

      // Podemos encadear varias chamadas para cada arquivo 
      //.pipe(imagemPelaMetade())
      //.pipe(imageEmPetroEBranco())
      //.pipe(transformaA())
      .pipe(gulp.dest('pastaB'))
  return cb()
}

const fim = cb => {
  console.log('Tarefa Fim!!!!')
  return cb()
}


module.exports.default = series(
    parallel(antes1,antes2), /* Em paralelo  */
    copiar,
    fim)