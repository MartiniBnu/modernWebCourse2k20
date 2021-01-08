let isAtivo = false

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) /* Aqui é feito um implicito para Boolean devido ao ! ou if */

console.log("os vedadeiros...")

console.log(!!3)
console.log(!!-1)
console.log(!!' teste')
console.log(!![])
console.log(!!Infinity)
console.log(!!{})
console.log(!!(isAtivo = true))


console.log("os falses...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo == false))
console.log(!!('' || null || 0 || ' '))

console.log('' || null || 0 || 'Uepa')

/* Exemplo pratico de inicialização */
let nome = 'Lugas'
console.log(nome || 'Desconhecido')