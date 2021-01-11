const aprovados = ['Agatha','Aldo','Daniel','Raquel']

// Passar uma callback
aprovados.forEach(function(nome, indice, array) {
  console.log(`${indice +1}: ${nome}`)
  console.log(array)
})

// Sem parrar parametros 
aprovados.forEach(nome => console.log(nome))


// armazenar fun��o em variavel 
const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)



// detalhe, sempre o primeiro parametro � o valor, e o segundo � o indice...
// o terceiro � o array, se for um objeto, ser� o pr�prio objeto...
// parametro 4 n�o existe, � undefined

