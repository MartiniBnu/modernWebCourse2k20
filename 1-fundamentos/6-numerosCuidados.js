console.log(7/0.0001) // N�o d� erro, � um tipo espec�fico do JS

console.log("10" / 2) // Converte implicitamente

console.log('3'+2) // String tem prefer�ncia para concatena��o, e como + � uma fun��o em strings, ele concatena
                   // Outras opera��es, como n�o existem no mundo de String, ele entende que pode tentar um  cast 
                  // de numero para tentar operar

console.log('3'-2)

console.log("10,s" / 2) // D� erro

console.log("Show" * 2) // D� erro pq n�o pode multiplicar um texto

console.log(0.1 + 0.7) // D� um resultado n�o muito preciso devido a especifica��o adotada para Floats pelo JD

// console.log(10.toString()) // D� erro pq precisa de cast

console.log((10).toString()) // Aqui funca