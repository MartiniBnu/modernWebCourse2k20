/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 */

 function getClassificaoTriangulo(a,b,c){
   if(a==b&&a==c){
     return 'Equilatero'
   } else if(a==b||a==c||b==c){
    return 'Isoceles'
   } else {
     return 'Escaleno'
   }
 }

 function imprimeClassificacaoTriangulo(a,b,c){
    console.log(`O triangulo ${a}X${b}X${c} foi classificado como [${getClassificaoTriangulo(a,b,c)}]`)
 }

 imprimeClassificacaoTriangulo(12,32,2)
 imprimeClassificacaoTriangulo(12,12,12)
 imprimeClassificacaoTriangulo(12,2,2)
 imprimeClassificacaoTriangulo(2,12,2)
