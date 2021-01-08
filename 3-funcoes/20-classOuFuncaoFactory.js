class Pessoa{
  constructor(nome){
      this.nome = nome
  }

  falarSeuNome() {
    console.log(`Meu nome eh: ${this.nome}`)
  }
}

const p1 = new Pessoa('Joaum')
p1.falarSeuNome()

const p2 = new Pessoa('Maria')
p2.falarSeuNome()


///

const criarPessoa = nome => {
  return {
    falarSeuNome: () => console.log(`Meu nome eh: ${nome}`)
  }
}

const p3 = criarPessoa('Luizaum')
p3.falarSeuNome()