/* 
npm init -y
npm i --save express@4.16.3 body-parser@1.18.2 -E
*/

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
  console.log(req.body)
  resp.send('<h2>Parabéns</h2>')
})

app.post('/usuarios/:id', (req, resp) => {
  console.log(req.params.id)
  console.log(req.body)
  resp.send('<h2>Parabéns Usuário Alterado</h2>')
})

app.listen(3003)