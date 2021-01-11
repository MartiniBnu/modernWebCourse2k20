console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


// Não tem, vamos incluir
String.prototype.reverse = function() {
  return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

// Não tem, vamos incluir
Array.prototype.first = function() {
  return this[0]
}


console.log([1,2,3,4,5].first())
console.log(['a','b','c','d','e'].first())


// Procurar não mexer nas padrões, toString por exemplo
String.prototype.toString = function() {
  return 'Lascou tudo'
}

console.log('Viu, nao vai reverter esse texto aqui!!!'.reverse())