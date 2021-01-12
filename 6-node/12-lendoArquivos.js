const fs = require('fs') // É core, já vem pré-instalado
const caminho = __dirname + '/12-arquivo.json'


// Sincrono, vai esperar ler tudo...
//const conteudo = fs.readFileSync(caminho,'utf-8')
//console.log(conteudo)

// Assincrono, call back que será chamada quando terminar de ler
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})


// PAra JSON tem um jeito muito mais fácil, mas só JSON
const config2 = require('./12-arquivo.json')
console.log(config2.db)
// Note que aqui rodou antes... Pq o assincrono demora um pouquinho mais



// Leitura de pasta
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteudo da pasta: ')
  console.log(arquivos)
})