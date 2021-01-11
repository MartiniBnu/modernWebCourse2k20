const obj = {a:1, b:2, c: 3, soma() {return a+b+c}}
// Converter para json
console.log(JSON.stringify(obj))

// JSON em objeto

//console.log(JSON.parse("{a: 1, b: 2, c: '3'}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

// Outra opção que suporta
console.log(JSON.parse('{"a": 1.76, "b": "string", "c": true, "d": {}, "e":[]}'))