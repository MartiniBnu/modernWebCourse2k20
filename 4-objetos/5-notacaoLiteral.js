const a = 1
const b = 2
const c = 3

// Na versão antiga precisava assim:
const obj1 = {a: a, b:b, c: c}

// Agora pode ser assim
const obj2 = {a,b,c}
console.log(obj1,obj2)


const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)


// Outra opção
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
  funcao1: function() {
    // Era assim antes, tradicional
  },
  funcao2() {
    // Só pode assim na versão mais nova
  }
}
