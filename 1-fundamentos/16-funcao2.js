// Armazenando uma função em uma variável
const imprimirSoma = function(a, b) {
  console.log(a+b)
}
imprimirSoma(2,4)


// Armazenando uma função arrow em uma variavel
const soma = (a,b) => {
  return a+b
}
console.log(soma(2,5))

// Retorno implicito
const substracao = (a,b) => a-b
console.log(substracao(1,3))