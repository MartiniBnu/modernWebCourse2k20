// dentro de node um arquivo representa um m�dulo
// tudo dentro de um m�dulo � visto s� por ele...
// para mandar para fora (export ou this) para pegar de fora (import)

this.ola = 'Fala pessoal'
exports.bemVindo = 'Bem vindo ao node!!!'
module.exports.ateLogo = 'Ate o proximo exemplo'

