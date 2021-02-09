import Pessoa from './pessoa'
import './assets' // Quando não tem nada depois, ele irá procurar algum arquivo index.js
import './modulos/moduloA'


const atendente = new Pessoa 
console.log(atendente.cumprimentar())