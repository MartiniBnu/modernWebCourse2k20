require('./9-global')

console.log(MinhaApp.saudacao())

// Pode mudar global 
MinhaApp.nome = 'Eita!!' // Depois do freeze n�o mudou mais
console.log(MinhaApp.nome)