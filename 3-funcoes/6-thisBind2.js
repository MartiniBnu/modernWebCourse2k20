function Pessoa() {
  this.idade = 0

   const self = this

  /* Daqui a x milisegundos vai ficar re-chamando */
  setInterval(function(){
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/ ,1000)
}


new Pessoa