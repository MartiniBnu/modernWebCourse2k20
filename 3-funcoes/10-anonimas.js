const soma = function(x,y) {
  return x + y
}

const imprimirResultado = function (a,b,operacao = soma) {
  console.log(operacao(a,b))
}

/* Como não passei usou o soma */
imprimirResultado(3,4)

/* Mesma coisa */
imprimirResultado(3,4, soma)


/* Outra function */
imprimirResultado(3,4, function(x,y) {
  return x-y
})


/* Outra function agora arrow */
imprimirResultado(3,4, (x,y) => x *y )

const pessoa = {
  falar: function() {
    console.log('Opa')
  }
}

pessoa.falar()
imprimirResultado(3,4, pessoa.falar )

