/* Lidar com n�meros em JavaScript pode dar muita dor de cabe�a. Voc� j� viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado ser�: 0.30000000000000004. Outra coisa
importante de observar, � o fato que o ponto � utilizado no lugar da v�rgula e vice versa. Com isso, vamos fazer
um exerc�cio simples para mostrar dinheiro sempre da forma correta. Desenvolva uma fun��o JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a v�rgula e o ponto).
 */

const imprimeNotacaoBR = function(valor) {
  valor = valor.toFixed(2)
  valor = (''+valor).replace('.',',')  
  console.log(`R$ ${valor}`)
}


imprimeNotacaoBR(899.323232)
imprimeNotacaoBR(-4478.3333)
imprimeNotacaoBR(Math.PI)
imprimeNotacaoBR(0.30000000000000004)
