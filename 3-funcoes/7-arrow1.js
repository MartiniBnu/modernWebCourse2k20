let dobro = function (a) {
  return 2 * a
}

dobro2 = (a) => {
  return 2 * a
}

// Retorno implicito
dobro3 = a => 2 * a 

console.log(dobro(Math.PI))
console.log(dobro2(Math.PI))
console.log(dobro3(Math.PI))

ola = () => 'Olá'
console.log(ola())

/* O underline é para dizer que tem 1 parâmetro, no lugar do () */
ola2 = _ => 'Olá'

console.log(ola2())