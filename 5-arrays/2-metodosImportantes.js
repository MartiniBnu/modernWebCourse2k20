// Metodos importantes e mais simples

const pilotos = ['Vettel', 'Alonso', 'Raikonnen', 'Massa']
// Como � const, n�o podemos mais criar registros

console.log(pilotos)

// Tira o ultimo
pilotos.pop()
console.log(pilotos)


// colocar 
pilotos.push('Verstappen')
console.log(pilotos)


// Shift, tira da primeira posi��o 
pilotos.shift()
console.log(pilotos)


// unShift, adiciona na primeira
pilotos.unshift('Hamilton')
console.log(pilotos)


// Adicionar numa posi��o espec�fica
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)


// Remover algum numa posi��o espec�fica
pilotos.splice(3,1)
console.log(pilotos)


// Slice cria um novo array
const algunsPilots = pilotos.slice(2)
console.log(algunsPilots)

// Pegar novamente com outras formas (Pega do 1 at� o 4)
const algunsPilotos3 = pilotos.slice(1,4)
console.log(algunsPilotos3)
