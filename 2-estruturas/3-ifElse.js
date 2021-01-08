const imprimirResultado = function(nota) {
  if (nota >= 7){
    console.log('Aprovado com nota '+ nota )
  } else {
    console.log('Reprovado com nota '+ nota )
  }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') // Cuidado