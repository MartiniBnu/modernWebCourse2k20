// Aqui iremos consumir
const moduloA = require('./1-moduloA') // Se for js precisa colocar .js, outros precisa
const moduloB = require('./2-moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)