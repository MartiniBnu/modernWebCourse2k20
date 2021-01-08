// mesmo não tendo parametros, podemos não declarar e pegar eles
function soma(){
   let soma = 0
   for (i in arguments) {
     soma += arguments[i]
   }
   return soma
}


console.log(soma())
console.log(soma(1))
console.log(soma(1,3243,54,54,65))
console.log(soma(1,3243,"tersdsdsds"))
console.log(soma("a","b","c","d"))