function imprimirSoma(a,b){
   console.log(a+b)
}

// Tudo funciona...
imprimirSoma()
imprimirSoma(2,3)
imprimirSoma(4,5,6,6)
imprimirSoma(2)

// Função com retorno (Default no b)
function soma(a, b = 0){
  return a + b
}

console.log(soma(2,66))