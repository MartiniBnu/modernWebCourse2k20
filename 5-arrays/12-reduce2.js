// função que serve para transformar um array em um outro elemento
const alunos = [
  {nome: 'Joao', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Pedro', nota: 9.8, bolsista: false},
  {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
  return acumulador && atual
}, true)
console.log(`Todos sao bolsistas? ${todosBolsistas}`)


// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(`Alguem eh bolsista? ${alunos.map(a => a.bolsista).reduce(algumBolsista)}`)