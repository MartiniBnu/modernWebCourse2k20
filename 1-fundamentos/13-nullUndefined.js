// Ponteiro de memória
const a = { name: 'Teste' }
console.log(a)

// As duas vão apontar pro mesmo endereço
const b = a

// Fizemos atribuição por referência
b.name = 'Opra'
console.log(a)
console.log(b)

/* --------------- atribuição por valor -------------------------- */
let c = 3
let d = c
d++
console.log(c, d)


/* Undefined */
let valor
console.log(valor)
valor = null
console.log(valor) // Não está mais undefined

// NUnca setar para undefined, usar null
// se for necessário retirar o ponteiro de uma variável

//console.log(valor.toString()) // Dá erro

const produto = {}
console.log(produto.preco) // Produto está definido, então não dá erro

//console.log(produto.preco.a) // aqui dá pau pq preco não existe

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined, use null ou 0 quando numérico
console.log(!!produto.preco)
console.log(produto) // Ainda existe o campo preço
// Se quiser tirar
//delete produto.preco
//console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)
