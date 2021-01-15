//console.log(module.exports === this)
//console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3 

exports = null
//console.log(module.exports) // somente ele é exportado

exports = {
  nome: 'Teste'
}

//console.log(module.exports) // não afetado acima

// Outra forma, aqui funciona, e vai sobescrever
module.exports = {publico: true}