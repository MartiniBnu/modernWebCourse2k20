/* Os tri�ngulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equil�tero: Os tr�s lados s�o iguais. Is�sceles: Dois lados iguais. Escaleno: Todos os lados s�o diferentes.
Crie uma fun��o que recebe os comprimentos dos tr�s lados de um tri�ngulo e retorne sua classifica��o quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condi��es matem�ticas de exist�ncia de um
tri�ngulo).
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
