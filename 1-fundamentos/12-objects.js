const prod1 = {} //objeto
// Pode sair criando novos campos a vontade
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço
console.log(prod1)

// Pode colocar objetos internos
const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    nome: 'Interno',
    valor: 12
  }
}
console.log(prod2)