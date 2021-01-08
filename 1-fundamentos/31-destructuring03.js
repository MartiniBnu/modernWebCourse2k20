function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

// Passando com destructuring
console.log(rand({ max: 50, min: 40 }))

// Passando como objeto
const obj = { max: 50, min: 20 }
console.log(rand(obj))

// Passar apenas um dos valores
const obj2 = { max: 2 }
console.log(rand(obj))