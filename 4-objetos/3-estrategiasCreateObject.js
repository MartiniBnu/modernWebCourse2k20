// Formas diferentes de criar objetos

// 1 - usando forma literal
const obj1 = {

}
console.log(obj1)


// 2 - Object em JS 
const obj2 = new Object
console.log(obj2)

// 3 - Criando próprias funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome
  preco = preco
  desc = desc

  this.getPrecoComDesconto = () => {
    return preco * (1-desc)
  }

}

const obj3 = new Produto('Lapis',7.99,.15)
const obj4 = new Produto('Notebook',2998.99,.25)
console.log(obj3.getPrecoComDesconto(),obj4.getPrecoComDesconto())



// 4 - Função Factory
function criaFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase/30) * (30-faltas)
    }
  }
}

const f1 = criaFuncionario('Joao',7980, 4)
const f2 = criaFuncionario('Maria',11400, 1)
console.log(f1.getSalario(),f2.getSalario())


// 5 - Object.create - será falado melhor depois
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// 6 - json.parse
const fromJSON = JSON.parse('{"info": "Sou um JSONNNNN"}')
console.log(fromJSON.info)