// Armazenando uma fun��o em uma vari�vel
const imprimirSoma = function(a, b) {
  console.log(a+b)
}
imprimirSoma(2,4)


// Armazenando uma fun��o arrow em uma variavel
const soma = (a,b) => {
  return a+b
}
console.log(soma(2,5))

// Retorno implicito
const substracao = (a,b) => a-b
console.log(substracao(1,3))