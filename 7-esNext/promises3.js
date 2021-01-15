// Tramento de exceções
function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro){
      reject('Deu pau')
    } else {
      resolve(valor)
    }
  })
}


funcionarOuNao('Testando',0.5)
  .then(v => console.log(`Valor: ${v}`))
  .catch(err => console.log(`Erro: ${err}`))