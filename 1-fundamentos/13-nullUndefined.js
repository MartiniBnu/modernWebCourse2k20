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
// se for necessario retirar o ponteiro de uma variavel

//console.log(valor.toString()) // Da erro

const produto = {}
console.log(produto.preco) // Produto esta definido, entao nao da erro

//console.log(produto.preco.a) // aqui da pau pq preco nao existe

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined, use null ou 0 quando numurico
console.log(!!produto.preco)
console.log(produto) // Ainda existe o campo preço
// Se quiser tirar
//delete produto.preco
//console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)
