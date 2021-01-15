class Avo {
  constructor(sobrenome){
    this.sobrenome = sobrenome
  }
}

// Como o proto
class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor'){
    // Chama construtor do avo
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    super('Silva') // chama o construtor do pai e usa profissão padrão
  }
}



const filho = new Filho 
console.log(filho)
