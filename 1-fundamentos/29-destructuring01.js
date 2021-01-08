// novo recurso de 2015
const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua Das Hort�ncias',
    numero: 1000
  }
}

// Tira do objeto pessoa as duas vari�veis
const { nome, idade } = pessoa
console.log(nome, idade)
console.log(pessoa)

// Fazer o mesmo mas colocando em novas var�aveis
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Fazer o mesmo mas com atributos que nem existem
const { sobrenome, bemHumorado= true} = pessoa
console.log(sobrenome, bemHumorado)

// Pegar os internos 
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)