function rand([ min = 0, max = 1000 ]) {
  // Se precisar inverter, cria novo array desestruturando
  if (min > max) [min, max] = [max, min]
  
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

// Passando com destructuring
console.log(rand([50,40]))

console.log(rand([992]))

console.log(rand([,10]))

console.log(rand([]))

// Aqui dará problemas
console.log(rand())