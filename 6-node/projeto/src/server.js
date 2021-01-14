const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

/*

// Quando tiver mais, depomos fazer na mesma URL, e depois com next ele vai pra próxima
app.get('/produtos', (req, res, next) => {
  console.log('Middleware 1...')
  next()
})

// Uma forma de criar uma que atende todas as requests é com o use
app.use((req, res, next) => {
  res.send({nome: 'Notebook', preco: 123.45}) // É convertido para JSON
})
*/

// Vai sempre passar por aqui...
app.use(bodyParser.urlencoded({extended: true}))


app.get('/produtos', (req, res, next) => {
  res.send(database.getProdutos()) // É convertido para JSON
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(database.getProduto(req.params.id)) 
})


// Criar
app.post('/produtos', (req, res, next) => {
  const produto = database.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // Vai converter o retorno em JSON
})


// Alterar
app.put('/produtos/:id', (req, res, next) => {
  const produto = database.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // Vai converter o retorno em JSON
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = database.excluirProduto(req.params.id)
  res.send(produto) // Vai converter o retorno em JSON
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`)
})