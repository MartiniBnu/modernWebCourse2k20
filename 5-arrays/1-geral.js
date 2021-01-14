// function, object e object
console.log(typeof Array, typeof new Array, typeof [])

// Não é a melhor forma
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)


// Mais indicado
aprovados = ['Bia','Carlos','Ana']

// começa no 0
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
console.log(aprovados[3]) // Não mais undefined

// Mais apropriado para incluir 
aprovados.push('Abia')
console.log(aprovados.length)

// Dá para botar lá no final
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

// Ordenada
aprovados.sort()
console.log(aprovados)


// excluir
//delete aprovados[1] // ele coloca o undefined na posição 1, o resto fica tudo igual
//console.log(aprovados)


// splice - pode adicionar, remove, ou remove e adiciona
// aprovados.splice(1,1) // Removeu o carlos e colocou a Bia na posição 1
//console.log(aprovados)

//aprovados.splice(1,2) // Removeu Ana e Bia, e colocou Carlos na posição 1
//console.log(aprovados) 

//aprovados.splice(1,2, 'Novo elemento 1', 'Novo elemento 2') // Removeu Ana e Bia, e colocou adicionou mais 2 na posição 1
//console.log(aprovados) // Removeu Ana e Bia, e colocou Carlos na posição 1


aprovados.splice(1,0, 'Novo elemento 13', 'Novo elemento 23') // Não removou ninguém e colocou adicionou mais 2 na posição 1
console.log(aprovados)