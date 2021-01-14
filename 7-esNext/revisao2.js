// Arrow function
const soma = (a,b) => a + b
console.log(soma(1,3))
console.log(soma(1)) //NaN



// Arrow com this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()


// Parametros default
function log(texto = 'Node'){
  console.log(texto)
}

log('Oi')
log()

// Operador rest
function total(...numeros){
  let total =0 
  numeros.forEach(n => total += n)
  return total
}
console.log(total(2,3,3,4,54,4)) // ... faz o agrupamento