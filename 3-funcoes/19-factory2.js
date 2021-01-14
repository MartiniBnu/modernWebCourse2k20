// Função factory 
function criaProduto(nome, preco, desconto = 0.1){
  return {
    nome,
    preco,
    desconto,
    precoComDesconto: preco - preco * desconto
  }
}


console.log(criaProduto('Lapis',500,.50))
console.log(criaProduto('Borracha',52))