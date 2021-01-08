let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)

/* Dentro do node usar o module.exports */
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

/* bind sempre perde pro arrow */
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)

comparaComThisArrow(module.exports)