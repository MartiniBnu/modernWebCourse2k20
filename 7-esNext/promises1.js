let a = 1
console.log(a)

// Algo virá no futuro
let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(3)
})

// Aqui é um objeto do promise retornado
//console.log(p)

// Aqui já acessamos o valor do retorno
p.then(function(valor) {
  console.log(valor)
})

// Se quiser retornar mais valores precisa de um objeto
let p2 = new Promise(function(cumprirPromessa2) {
  cumprirPromessa2({
    x: 3,
    y: 4
  })
})


p2.then(function(valor) {
  console.log(valor.x, valor.y)
})

// Outra
let p3 = new Promise(function(cumprirPromessa3) {
  cumprirPromessa3(['Ana','Bia','Carlos','José'])
})

p3.then(valor => valor[1])
  .then(primeiro => primeiro[0])
  .then(letra => letra.toLowerCase())
  .then(letraMinuscula => console.log(letraMinuscula))
