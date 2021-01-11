// Se tiver como escolher entre Heran�a ou Composi��o, usar composi��o, pois ela pode ter v�rios pais, heran�a � uma s�
const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

// Acessa o pai (__proto__) - Tipo o Super
console.log(ferrari.prototype) // Objeto n�o tem isso, s� o __proto___
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(volvo.__proto__ === ferrari.__proto__)
console.log(Object.prototype.__proto__) // Aqui � o ultimo nivel


function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
