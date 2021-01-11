// Pessoa aponta pra um endere�o de mem�ria, ex: 1232ds43232
const pessoa = { nome: 'Joao'}

// Nao mudamos a constante, mas sim seu dado
pessoa.nome = 'Pedro'

console.log(pessoa)

// Tentando apontar um novo objeto, ex: 32njhj344343
//pessoa = { nome: 'Ana'}


// Congelar o objeto pessoa, agora sim n�o muda mais nada
Object.freeze(pessoa)
pessoa.end = 'Rua ABC'
delete pessoa.nome
pessoa.nome = 'Maria'

console.log(pessoa)

// Criar um objeto j� congelado
const pessoaConstante = Object.freeze({nome: 'John Snow'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)