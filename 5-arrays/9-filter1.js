// Filtra um array
// Ao invés de fazer for each, pode fazer já o filter
const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true},
  { nome: 'iPad Pro', preco: 4199, fragil: true},
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  { nome: 'Copo de Plastico', preco: 18.99, fragil: false},
]

/*console.log(produtos.filter(function(p){
  return (p.fragil == true)
}))

console.log(produtos.filter(function(p){
  return (p.preco >= 2000)
}))*/


// apenas frageis 
const fragil = produto => produto.fragil
// produtos caros 
const caro = produto => produto.preco >= 500

// retornar caro e fragil
const resultado = produtos.filter(fragil).filter(caro)
console.log(resultado)