/*

No script package.json nos colocamos o script start que liga o nodemon
Como colocamos o main este aqui, quando d� npm start, ele inicia o 
script que est� l� no main

npm dev n�o funciona, start e test funcionam pq s�o defaults, dev n�o...

Ai para dev funcionar, como � customizado:

npm run dev


*/


const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// apenas chineses
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
  const funcionarios = response.data
  //console.log(funcionarios)

  // Mulher chinesa com menor sal�rio
  const chinesaEstagiaria = funcionarios
  //.filter(chineses)
  .filter(mulheres)
  .reduce(menorSalario)

  console.log(chinesaEstagiaria)


})

