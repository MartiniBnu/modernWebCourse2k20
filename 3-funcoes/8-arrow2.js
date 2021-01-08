function Pessoa() {
  this.idade = 0

  /* Daqui a x milisegundos vai ficar re-chamando */
  setInterval(() => {
    this.idade++
    console.log(this.idade)
  } ,1000)
}


new Pessoa