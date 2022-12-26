// Arquivo index.js principal ---------------------- ---------------------- ---------------------- ---------------------- ----------------------
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const routes = require('./routes/index')

app.use(bodyParser.json())

//utilizando o routes
routes(app)

app.listen(port, () => {
  console.log('Servidor rodando na porta 3000')
})


//Arquivo index.js da pasta routes ---------------------- ---------------------- ---------------------- ---------------------- ----------------------
const express = require('express')
const jogos = require('router.js')

const routes = app => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Curso de node' })
  })

  app.use(express.json(), jogos)
}

module.exports = routes

// arquivo router.js ---------------------- ---------------------- ---------------------- ---------------------- ----------------------
const express = require('express')
const router = express.Router()
const faker = require('faker')

router
  .get('/jogos', (req, res) => {
    //implementação de busca
    console.log('Busca')
  })
  .get('/jogos/:id', (req, res) => {
    //busca por um item
    console.log('Busca específica')
  })
  .post('/jogos', (req, res) => {
    //implementação de cadastro
    console.log('Cadastro')
  })

let appRouter = function (app) {
  app.get('/usuario', (req, res) => {
    let dadosUsuario = {
      primeiroNome: faker.name.firstName(),
      ultimpNome: faker.name.lastName(),
      userName: faker.internet.userName(),
      email: faker.internet.email()
    }
    res.status(200).send(dadosUsuario)
  })
  app.get('/usuario/:num', (req, res) => {
    let usuarios = []
    let num = req.params.num

    if (isFinite(num) && num > 0) {
      for (i = 0; i <= num - 1; i++) {
        usuarios.push({
          primeiroNome: faker.name.firstName(),
          ultimpNome: faker.name.lastName(),
          userName: faker.internet.userName(),
          email: faker.internet.email()
        })
      }

      res.status(200).send(usuarios)
    } else {
      res.status(400).send({ message: 'Número de usuário não encontrado' })
    }
  })
  app.post('/usuarios', (req, res) => {
    const usuario = req.body.usuarios
    res.status(200).send({ message: 'Usuário criado' })
    //validação:
    if (
      usuario.primeiroNome != undefined &&
      usuario.ultimpNome != undefined &&
      usuario.userName != undefined &&
      usuario.email != undefined
    ) {
      res.status(201).send({ message: 'usário salvo com sucesso' })
    } else {
      res
        .status(400)
        .send({ message: 'Faltam alguns campos a serem preenchidos' })
    }
  })
}
module.exports = router

