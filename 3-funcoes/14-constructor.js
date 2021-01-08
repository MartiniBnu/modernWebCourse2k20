function Carro(velocidadeMaxima = 200, delta=5) {
  // atributo privado 
  let velocidadeAtual = 0

  // metodo publico
  this.acelerar = function() {
    if(velocidadeAtual + delta <= velocidadeMaxima){
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }

  // metodo publico para acessar
  this.getVelocidadeAtual = function() {
    return velocidadeAtual
  }

}

// Usa padr�o
const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

// Cria com valores passados
const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


console.log(typeof Carro)
console.log(typeof uno)
console.log(typeof ferrari)