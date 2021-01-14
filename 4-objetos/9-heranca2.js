// Cadeia de protótipos (Protorype Chain)
Object.prototype.attr0 = '0' // Não é recomendado, pois vai colocar em TODOS objetos
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'c', attr2: 'B2'} // Sombreamento, se tem no filho, ele não olha o do pai


console.log(avo)
console.log(pai)
console.log(filho)

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)



const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMaix(delta){
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    }else {
      this.velAtual = this.velMax
    }
  },
  status(){
    return `${this.velAtual} Km/h de ${this.velMax} Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}` // Sombreamento de funções, aqui usamos o Super
  }
}

// Faremos uma forma diferente de referenciar o pai 
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)



ferrari.aceleraMaix(21)
ferrari.aceleraMaix(21)
ferrari.aceleraMaix(500)
volvo.aceleraMaix(100)


console.log(ferrari) // Não mostra função, mesmo acessivel
console.log(volvo) // Não mostra a velMax, mesmo tendo, o toString tanto acima como aqui, não mostram

console.log(volvo.status())
console.log(ferrari.status())