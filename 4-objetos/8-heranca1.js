// Se tiver como escolher entre Herança ou Composição, usar composição, pois ela pode ter vários pais, herança é uma só
const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

// Acessa o pai (__proto__) - Tipo o Super
console.log(ferrari.prototype) // Objeto não tem isso, só o __proto___
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(volvo.__proto__ === ferrari.__proto__)
console.log(Object.prototype.__proto__) // Aqui é o ultimo nivel


function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
