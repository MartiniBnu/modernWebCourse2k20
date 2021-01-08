let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

/* O ++ vai rodar antes da comparação e o -- só no final */
console.log(++num1 == num2--)

/* Aqui já está calculado */
console.log(num1 == num2)