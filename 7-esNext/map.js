const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('anguular', {framework: true})

//console.log(tecnologias.react) // nao funca
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
  [function () { }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl)
})

// Esatrutura chave e valor que não aceita duplicidade
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // Vai substituir, pq é uma só por chave
chavesVariadas.set(456, 'c')
console.log(chavesVariadas)
