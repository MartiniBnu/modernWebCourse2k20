const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log('Keys '+Object.keys(pessoa))
console.log('Values '+Object.values(pessoa))
console.log('Entries '+Object.entries(pessoa))


Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
} )

/* Destructuring */
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
} )


Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, /* Remove dos enumeráveis com false */
  writable: false,
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log('Keys '+Object.keys(pessoa))

// Surgiu em 2015
const dest = {a: 1}
const o1 = { b: 2}
const o2 = {c: 3, a: 4}
// Colocar no dest todos atributos dos objetos passados
// Se já tem atributo no destino, ele usa o mesmo valor dos passados para ele, 
// por isso fica a:4
const obj = Object.assign(dest, o1, o2)

console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)