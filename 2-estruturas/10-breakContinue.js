const nums = [1,2,3,4,5,6,7,8,9,10]

console.log('X')
for (x in nums) {
  if (x==5) {
    break // cai fora na condição
  }  
  console.log(x)
}

console.log('Y')
for (y in nums) {
  if (y==5) {
    continue // Vai pular a próxima
  }  
  console.log(y)
}

// Não usar, é tipo um GoTo
console.log('externo')
externo: for(a in nums) {
  for (b in nums){
    if(a == 2 && b== 3) break externo
    console.log(`Par = ${a},${b}`)
  }
}

console.log('Fim')