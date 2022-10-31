// Arquivo index.js
const Express = require('express')
const roteador = require('./rotas')
const bodyParser = require('body-parser')

const app = Express()

app.use(bodyParser.json())

app.listen(8080, () => {
  console.log('Servidor ativo')
})

app.use('/', roteador)

// Arquivo rotas.js
const roteador = require('express').Router()
const validar = require('./validar')
let historico = []

roteador.post('/inserir', (requisicao, resposta) => {
  // criei esta função de validação para os campos necessários
  validar(requisicao, resposta)
  // objeto que recebe especificamente o valor de url e de dataAcesso
  const site = {
    url: requisicao.body.url,
    dataAcesso: requisicao.body.dataAcesso
  }
  historico.push(site)
  resposta.status(201)
  resposta.send('OK')
})

// rota para listar meus dados
roteador.get('/listar', (requisicao, resposta) => {
  resposta.status(200)
  resposta.send(historico)
})

module.exports = roteador

// Arquivo validar.js
function validar(corpo, envio) {
  if (!corpo.body.url || !corpo.body.dataAcesso) {
    envio.status(400)
    throw new Error(`O campo está inválido`)
  }
}

module.exports = validar
