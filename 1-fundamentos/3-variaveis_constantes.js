var a = 3
let b = 4

// Var deixa ser re-declarado
var a = 30
// let não deixa, dá erro de sintaxe se fizermos let de novo...
/*let*/ b = 40

console.log(a,b)


a = 300
b = 400

console.log(a,b)


// Constante só deixa uma vez
const c = 5
//c = 50
console.log(c)