// Ponteiro de mem�ria
const a = { name: 'Teste' }
console.log(a)

// As duas v�o apontar pro mesmo endere�o
const b = a

// Fizemos atribui��o por refer�ncia
b.name = 'Opra'
console.log(a)
console.log(b)

/* --------------- atribui��o por valor -------------------------- */
let c = 3
let d = c
d++
console.log(c, d)


/* Undefined */
let valor
console.log(valor)
valor = null
console.log(valor) // N�o est� mais undefined

// NUnca setar para undefined, usar null
// se for necess�rio retirar o ponteiro de uma vari�vel

//console.log(valor.toString()) // D� erro

const produto = {}
console.log(produto.preco) // Produto est� definido, ent�o n�o d� erro

//console.log(produto.preco.a) // aqui d� pau pq preco n�o existe

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined, use null ou 0 quando num�rico
console.log(!!produto.preco)
console.log(produto) // Ainda existe o campo pre�o
// Se quiser tirar
//delete produto.preco
//console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)
