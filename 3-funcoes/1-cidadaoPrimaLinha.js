// Funcao em JS é First-Class Object (Citizens)
// Ou High order function

// criar de forma literal
// toda funcao sem return tem undefined
function fun1() {}


// Armazenar em uma variavel 
const fun2 = function () {}
// Para chamar
fun2()


// armazenar dentro de um array
const arrayComFunction = [function(a,b){ return a+b}, fun1, fun2]
// Chamando
console.log(arrayComFunction[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())


// Como passar uma função como parâmetro 
function run(fun) {
  fun()
}
// Chamando
run(obj.falar)
run(function() {console.log('Executando...')})

// Uma função pode ser retornada
function soma(a,b) {
  return function (c) {
    console.log (a+b+c)
  }
}
// chamando 
soma(2,3)(4)
// Olha a Gambi
const cincoMais = soma(2,3)
cincoMais(4)




