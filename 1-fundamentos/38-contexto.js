let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = true


console.log(a)
console.log(global.b)
console.log(this.c)

console.log(module.exports)

console.log(module.exports.c === this)

// N�o fa�a isso em casa, pq aqui vai jogar l� no global
console.log(global.abc)

// this no node � o module.exports


// window � o global 
// this. tamb�m pega o global 
/*
var a = 'texto'

// No browser
console(window.a)

let e const n�o s�o acess�veis via window




var a = 123
undefined
window.a
123
let b = 1233
undefined
b
1233
window.b
undefined
let b = 1
undefined
let b = 1
undefined
const c = 56454
undefined
window.c
undefined
function f1 () { return this == window } 
undefined
this.f1
� f1 () { return this == window }
const f1 = 12
VM493:1 Uncaught SyntaxError: Identifier 'f1' has already been declared
let pessoa = {nome: 'Ana', falar: function() { return `Eu sou ${this.nome}` }}
undefined
pessoa.falar
� () { return `Eu sou ${this.nome}` }
this.nomer
undefined
this.nome
undefined
pessoa.falar()
"Eu sou Ana"
pessoa.nome = 'Marcos'
"Marcos"
pessoa.falar()
"Eu sou Marcos"
pessoa.verificaEscopo = function() { return this === window }
� () { return this === window }
pessoa.verificaEscopo()
false

*/