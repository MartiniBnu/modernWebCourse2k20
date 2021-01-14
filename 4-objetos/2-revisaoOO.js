// coleção dinâmica de pares chave/valor 
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'
produto.preco = 220.

console.log(produto)
delete produto.preco
delete produto['marca']
console.log(produto)

// Mais complexo
const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [{
      nome: 'Junior',
      idade: 19
    }, {
        nome: 'Ana',
        idade: 42
      }],
      calculaValorSeguro: function() {

    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida Blumenau'

console.log(carro)


delete carro.condutores
delete carro.calculaValorSeguro
delete carro.proprietario.endereco

console.log(carro)


