console.log(this === global) // não aponta pra global, mas para module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)


function logThis() {
  console.log('Dentro da function...')
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)
  // Dentro de uma função sempre aponta para Global
}

logThis()