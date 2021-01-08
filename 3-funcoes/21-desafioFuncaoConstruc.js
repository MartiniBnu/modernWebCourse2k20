function Pessoa(nome){
  this.nome = nome

  this.falarSeuNome = function() {
      console.log(`Meu nome eh: ${this.nome}`)
    }
}


const p1 = new Pessoa('Joaum')
p1.falarSeuNome()
