const aprovados = ['Agatha','Aldo','Daniel','Raquel']

// Passar uma callback
aprovados.forEach(function(nome, indice, array) {
  console.log(`${indice +1}: ${nome}`)
  console.log(array)
})

// Sem parrar parametros 
aprovados.forEach(nome => console.log(nome))


// armazenar função em variavel 
const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)



// detalhe, sempre o primeiro parametro é o valor, e o segundo é o indice...
// o terceiro é o array, se for um objeto, será o próprio objeto...
// parametro 4 não existe, é undefined

