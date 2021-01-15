// função que serve para transformar um array em um outro elemento
const alunos = [
  {nome: 'Joao', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Pedro', nota: 9.8, bolsista: false},
  {nome: 'Ana', nota: 8.7, bolsista: true},
]


console.log(alunos.map(a => a.nota))
// Reduce 
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
  console.log(acumulador, atual)
  return acumulador + atual
}, 0)

// Vai fazendo um for each e usando o resultado para ir empilhando as chamadas

console.log(resultado)