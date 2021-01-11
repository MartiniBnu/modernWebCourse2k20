const sequencia = {
  _valor: 1, /* O _ � um conven��o para deixar privada, mas n�o � privada, � s� conven��o mesmo */
  get valor() {return this._valor ++},
  set valor(valor) { 
    if(valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000 // Jao fez pq � menor

console.log(sequencia.valor, sequencia.valor)