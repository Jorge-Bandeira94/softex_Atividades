const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

let livros = [{ titulo: 'primeiro artigo', ISBN: '' }]

app.get('/artigos', (req, res) => {
  res.status(200).send(artigos)
})

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080')
})

// vamos adicionar formas de inserir dados no array de livros com CRUD

app.post('/livros/add', (req, res) => {
  let livro = req.body // em livro estamos inserindo os dados que estão no body (precisa ter nome e ISBN)
  let pos = livros.length + 1 //criando uma posição que será usad apara inserir o livro no array
  livros.push(artigo)
  livro.pos = pos
  res.status(200).send(livro)
})

// agora vamos ler algum livro do array

app.get('/livros/:id', (req, res) => {
  let id = req.params.id // aqui estamos pegando o parametro no body que determina o id do livro
  if (id > 0 && id <= livros.length) {
    res.status(200).send(livros[id - 1]) //id -1 por que o array começa no indice zero e não no um
  } else {
    res.status(404).send('Livro não encontrado')
  }
})

app.get('/livros/ver_todos', (req, res) => {
  res.status(200).send(livros)
})

// Para atualizar algum livro usamos a lógica anterior de buscar um artigo específico
app.put('/livros/editar/:id', (req, res) => {
  let id = req.params.id // aqui estamos pegando o parametro no body que determina o id do livro
  if (id > 0 && id <= livros.length) {
    let livro = req.body
    livros[id - 1] = livro // substituindo o livro desejado pelo novo
    res.status(200).send(livro)
  } else {
    res.status(404).send('Livro não encontrado')
  }
})

// Para deletar usaremos o mesmo processo anterior, de escolher um id
app.delete('/livros/deletar/:id', (req, res) => {
  let id = req.params.id // aqui estamos pegando o parametro no body que determina o id do livro
  if (id > 0 && id <= livros.length) {
    livros.splice(id - 1, 1) //deletando 1 artigo na posição id-1
    res.status(200).send('Livro removido')
  } else {
    res.status(404).send('Livro não encontrado')
  }
})

//endpoit para caso o cliente erre ao digitar a url

app.get('*', (req, res) => {
  res.status(404).send('Página não encontrada')
})
