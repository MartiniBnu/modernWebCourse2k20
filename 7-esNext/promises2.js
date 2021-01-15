function gerarNumerosEntre(min,max) {
  if(min > max){
    let a = [min, max]
    // destruncturing
    const[x,y] = a
  }  

  return new Promise(resolve =>  {
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * fator) + min
      resolve(aleatorio)
    })

}

gerarNumerosEntre(1,60)
  .then(num => num * 10)
  .then(numX10 => `O numero gerado foi: ${numX10}`)
  .then(console.log) // Não precisa passar variavel só chamar a funcao que ele dispacha o valor do then anterior
