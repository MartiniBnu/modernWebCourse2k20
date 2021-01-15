// let e const
{
  var a = 2
  let b = 3
}

console.log(a)
// console.log(b) // Da erro pq let fica no escopo do bloco


// Template string
const produto = 'iPad'
console.log(`${produto} é caro pra dedéu!`)


// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
const [x,y] = [1,2]
console.log(x,y)
const {idade: i, nome: n} = {nome: 'Ana', idade: 9}
console.log(i, n)