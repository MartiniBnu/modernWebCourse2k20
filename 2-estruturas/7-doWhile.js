function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = -1

// Sempre ira fazer a primeira vez e só testará no final
do {
  opcao = getInteiroAleatorioEntre(-1,10)
  console.log('Opcao escolhida foi '+opcao)
} while (opcao != -1)

console.log('Falou!')