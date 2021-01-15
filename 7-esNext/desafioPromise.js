const fs = require('fs') // É core, já vem pré-instalado
const path = require('path')

function lerArquivo(caminho) {
  return new Promise(resolve =>  {
      fs.readFile(caminho, function(_, conteudo) {
        resolve(conteudo.toString())
      })
    })
}

// Chamada
const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
  .then(conteudo => conteudo.split('\n'))
  .then(linhas => console.log(linhas))
