const fs = require('fs') // É core, já vem pré-instalado

const produto = {
  nome: 'Celular',
  preco: 129.99,
  desconto: 0.15
} 

fs.writeFileSync(__dirname + '/13-arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo saldo!')
})

