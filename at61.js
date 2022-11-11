const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

let artigos = [{ titulo: 'primeiro artigo' }]

app.get('/artigos', (req, res) => {
  res.status(200).send(artigos)
})

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080')
})

// vamos adicionar formas de inserir dados no array de artigos com CRUD

app.post('/artigos/add', (req, res) => {
  let artigo = req.body // em artigo estamos inserindo os dados que estão no body
  let pos = artigos.length + 1 //criando uma posição que será usad apara inserir o artigo no array
  artigos.push(artigo)
  artigo.pos = pos // posição do artigo
  res.status(200).send(artigo)
})

// agora vamos ler algum artigo do array

app.get('/artigos/:id', (req, res) => {
  let id = req.params.id // aqui estamos pegando o parametro no body que determina o id do artigo
  if (id > 0 && id <= artigos.length) {
    res.status(200).send(artigos[id - 1]) //id -1 por que o array começa no indice zero e não no um
  } else {
    res.status(404).send('Artigo não encontrado')
  }
})

app.get('/artigos/ver_todos', (req, res) => {
  res.status(200).send(artigos)
})

// Para atualizar algum artigo usamos a lógica anterior de buscar um artigo específico
app.put('/artigos/editar/:id', (req, res) => {
  let id = req.params.id // aqui estamos pegando o parametro no body que determina o id do artigo
  if (id > 0 && id <= artigos.length) {
    let artigo = req.body
    artigos[id - 1] = artigo // substituindo o artigo desejado pelo novo
    res.status(200).send(artigo)
  } else {
    res.status(404).send('Artigo não encontrado')
  }
})

// Para deletar usaremos o mesmo processo anterior, de escolher um id
app.delete('/artigos/deletar/:id', (req, res) => {
  let id = req.params.id // aqui estamos pegando o parametro no body que determina o id do artigo
  if (id > 0 && id <= artigos.length) {
    artigos.splice(id - 1, 1) //deletando 1 artigo na posição id-1
    res.status(200).send('Artigo removido')
  } else {
    res.status(404).send('Artigo não encontrado')
  }
})

//endpoit para caso o cliente erre ao digitar a url

app.get('*', (req, res) => {
  res.status(404).send('Página não encontrada')
})
