require('./9-global')

console.log(MinhaApp.saudacao())

// Pode mudar global 
MinhaApp.nome = 'Eita!!' // Depois do freeze não mudou mais
console.log(MinhaApp.nome)