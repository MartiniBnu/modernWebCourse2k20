console.log(7/0.0001) // Não dá erro, é um tipo específico do JS

console.log("10" / 2) // Converte implicitamente

console.log('3'+2) // String tem preferência para concatenação, e como + é uma função em strings, ele concatena
                   // Outras operações, como não existem no mundo de String, ele entende que pode tentar um  cast 
                  // de numero para tentar operar

console.log('3'-2)

console.log("10,s" / 2) // Dá erro

console.log("Show" * 2) // Dá erro pq não pode multiplicar um texto

console.log(0.1 + 0.7) // Dá um resultado não muito preciso devido a especificação adotada para Floats pelo JD

// console.log(10.toString()) // Dá erro pq precisa de cast

console.log((10).toString()) // Aqui funca