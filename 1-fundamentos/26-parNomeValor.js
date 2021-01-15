//par nome/valor 
const saudacao = 'Opa' // Contexto léxico

function exec() {
  const saudacao = 'Fallaaaaa' // Contexto léxico 2
  return saudacao
}

// Obejtos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
