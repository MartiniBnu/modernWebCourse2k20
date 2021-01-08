// entrategia 1 para valor padrão
function soma1(a, b ,c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}
console.log('Funcao1')
console.log(soma1())
console.log(soma2(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0))

// estrategia 2 
function soma2(a,b,c) {
  /* Se é diferente de undefiend */
  a = a !== undefined ? a : 1
  /* Se está nos arguments o param 2 */
  b = 1 in arguments ? b : 1
  /* Se é um numero */
  c = isNaN(c) ? 1 : c /* Se não tiver a opção 3 Nativo, usar essa */
  /* Soma */
  return a + b + c
}
console.log('Funcao2')
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))


// estrategia 3 - Parametro padrão --- Melhor opção
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log('Funcao3')
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))