const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')


// Vai prover todos os arquivos estáticos no server
app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())




// Objeto para storage, aqui configuramos onde iremos gravar
const storage = multer.diskStorage({
  // Define a pasta
  destination: function (req, file, callback) {
    callback(null,'./upload')
  },
  // Define o nome do arquivo
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({storage}).single('arquivo')


/************* Serviços **************/
app.get('/teste', (req, res) => res.send(new Date))
app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.end('Ocorreu um erro.')
    }
    res.end('Concluído com sucesso!')
  })
})

/*************************** Fetch API ************************/
app.post('/formulario', (req, res) => {
  res.send({
    ...req.body,
    id: 1
  })
})

/************************** AXIOS *****************************/
app.get('/parOuImpar', (req, res) => {
  // req.body   => 
  // req.query  => /parOuImpar?numero=135
  // req.params => /parOuImpar/135
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
    resultado: par ? 'par' : 'impar'
  })
})


/************* start do serviço ************/
app.listen(8080, () => console.log('Executando'))

