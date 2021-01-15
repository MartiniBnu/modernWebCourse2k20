// Nao aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Curica')
times.add('Flamerda')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))

times.delete('Curica')
console.log(times.has('Curica'))

// Set remove duplicados na hora de criar
const nomes = ['Raquel','Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)