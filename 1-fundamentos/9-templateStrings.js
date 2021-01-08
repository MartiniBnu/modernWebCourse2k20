const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'

// Usado para quebras de linhas
const template = `
Olá 
${nome}!!!`

console.log(concatenacao, template)

// Expressões, notem que ele só interpreta dentro dos {}
console.log(`1 + 1 = ${1 + 1}`)

// Criamos uma função e podemos chamar ela dentro de uma expressão
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)