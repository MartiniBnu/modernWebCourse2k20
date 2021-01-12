const contadorA = require('./8-instanciaUnica')
const contadorB = require('./8-instanciaUnica')

const contadorC = require('./8-instanciaNova')() /* Retorna um objeto da função factory */
const contadorD = require('./8-instanciaNova')()


contadorA.inc()
contadorA.inc()
console.log(contadorA.valor ,contadorB.valor)

// Facotory cria novas instancias
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)