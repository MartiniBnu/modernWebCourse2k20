let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

/* O ++ vai rodar antes da compara��o e o -- s� no final */
console.log(++num1 == num2--)

/* Aqui j� est� calculado */
console.log(num1 == num2)