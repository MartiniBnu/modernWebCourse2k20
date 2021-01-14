function getPreco(imposto=0, moeda='R$'){
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

// Pra usar só a função, como não teria nada com o nome, precisamos criar no global, senão dará NaN
global.preco = 20
global.desc = 0.1
console.log(getPreco())

//Ou, chamar dentro do produto, ai ela usará os atributos dentro da classe 
console.log(produto.getPreco())

// Podemos passar um objeto com call, ai ele usará ele como o contexto dele
// Apply é a mesma coisa
const carro = {preco: 49990, desc: .20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Diferença de Call e Aply, Call passa direto params, apply passa um array
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro,[0.17,'$']))