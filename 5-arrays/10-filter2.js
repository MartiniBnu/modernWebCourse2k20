Array.prototype.filter2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}


// Filtra um array
// Ao invés de fazer for each, pode fazer já o filter
const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plastico', preco: 18.99, fragil: false },
]

// apenas frageis 
const fragil = produto => produto.fragil
// produtos caros 
const caro = produto => produto.preco >= 500

// retornar caro e fragil
const resultado = produtos.filter2(fragil).filter2(caro)
console.log(resultado)