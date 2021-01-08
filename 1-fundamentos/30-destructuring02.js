const [a] = [10]
console.log(a)

// Tira di vetor e coloca nas posições
const [n1, ,n3, , n5, n6 = 0] = [10,7,9,8]
console.log(n1, n3, n5, n6)

// Vai ignorar o primeiro array e pegar só o segundo do segundo array
const [, [,nota]] = [[, 8,8], [9,6,8]]
console.log(nota)