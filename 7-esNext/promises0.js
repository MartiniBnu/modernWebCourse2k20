function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(frase=='Erro'){
        reject('Não deu')
      }else{
        resolve(frase)
      }
    }, segundos * 1000)
  })
}


falarDepoisDe(3, 'Erro')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e))