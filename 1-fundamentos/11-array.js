const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],valores[3])
// Náo dá pau, só não mostra
console.log(valores[4])

valores[4] = 10
console.log(valores[4])

// COloquei lá na posição 10, para ficar vazio no meio
valores[10] = 99
// Não dá pau, ele mostra que tem itens vazios
console.log(valores)

// Quantidade
console.log(valores.length)

// Pode jogar qq coisa
valores.push({id: 3}, false, null, 'oi')

console.log(valores)

// Tirar o ultimo e retornar ele
console.log(valores.pop())
console.log(valores)

console.log(typeof valores)