// function, object e object
console.log(typeof Array, typeof new Array, typeof [])

// N�o � a melhor forma
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)


// Mais indicado
aprovados = ['Bia','Carlos','Ana']

// come�a no 0
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
console.log(aprovados[3]) // N�o mais undefined

// Mais apropriado para incluir 
aprovados.push('Abia')
console.log(aprovados.length)

// D� para botar l� no final
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

// Ordenada
aprovados.sort()
console.log(aprovados)


// excluir
//delete aprovados[1] // ele coloca o undefined na posi��o 1, o resto fica tudo igual
//console.log(aprovados)


// splice - pode adicionar, remove, ou remove e adiciona
// aprovados.splice(1,1) // Removeu o carlos e colocou a Bia na posi��o 1
//console.log(aprovados)

//aprovados.splice(1,2) // Removeu Ana e Bia, e colocou Carlos na posi��o 1
//console.log(aprovados) 

//aprovados.splice(1,2, 'Novo elemento 1', 'Novo elemento 2') // Removeu Ana e Bia, e colocou adicionou mais 2 na posi��o 1
//console.log(aprovados) // Removeu Ana e Bia, e colocou Carlos na posi��o 1


aprovados.splice(1,0, 'Novo elemento 13', 'Novo elemento 23') // N�o removou ningu�m e colocou adicionou mais 2 na posi��o 1
console.log(aprovados)