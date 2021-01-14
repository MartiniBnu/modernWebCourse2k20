// dentro de node um arquivo representa um módulo
// tudo dentro de um módulo é visto só por ele...
// para mandar para fora (export ou this) para pegar de fora (import)

this.ola = 'Fala pessoal'
exports.bemVindo = 'Bem vindo ao node!!!'
module.exports.ateLogo = 'Ate o proximo exemplo'

