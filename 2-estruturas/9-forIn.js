
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i in notas){
  console.log(`I do For = ${i}`)
  console.log(`Notas no For = ${notas[i]}`)
}


console.log('Atributos da pessoa')
const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  pesoo: 64
}

for (let atrib in pessoa) {
  console.log(`${atrib} = ${pessoa[atrib]}`)
}