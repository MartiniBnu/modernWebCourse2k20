const escola = "Cod3r"

console.log(escola.charAt(4))
// N�o tem na posi��o 5, mas n�o d� erro, s� volta vazio
console.log(escola.charAt(5))

// ASCII
console.log(escola.charCodeAt(3))

// Instr ??
console.log(escola.indexOf('3'))

// Substr
console.log(escola.substring(1))
console.log(escola.substring(0,3))

// Concatenar
console.log('Escola '.concat(escola).concat("...!!!"))

// Substituir (usou Regex)
console.log(escola.replace(3,'e'))

// Substituir (usou Regex)
console.log(escola.replace(/\d/,'e'))

// Usar Array
console.log('Ana,Maria,Petro'.split(","));