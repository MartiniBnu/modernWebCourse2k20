// Interpetrador j� tem todas function declaration
console.log(soma(3,4))
// Function expression e named n�o d�
//console.log(sub(3,4))
//console.log(mult(3,4))


// Forma tradicional - function declaration
function soma(x,y){
  return x + y
}

// function expression 
const sub = function(x,y) {
  return x - y
}
console.log(sub(3,4))

// named function expression (s� ajuda quando est� debugando um stack trace pq mostra o nome interno da fun��o)
const mult = function mult(x,y) {
  return x * y
}
console.log(mult(3,4))