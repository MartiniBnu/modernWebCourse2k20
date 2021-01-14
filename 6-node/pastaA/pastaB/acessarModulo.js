const moduloA = require('../../1-moduloa')
// no Linux é case sensitive, no Windows e MAC funca
console.log(moduloA.ola)

//const moduloB = require('C:\Users\Marcos\OneDrive\DSV\_GIT\modernWebCourse2k20-1\6-node\2-moduloB.js')
//console.log(moduloB.ola)


// como tem o index dentro de node modules ele acha
const saudacao = require('saudacao')
console.log(saudacao.ola)


// Modulo Core, já pre-instalados
const http = require('http')
http.createServer((req,res) => {
  res.write('Bom dia!!!')
  res.end()
}).listen(8080)


// outro, interno
 const c = require('./pastaC/index')
 console.log(c.ola2)


 