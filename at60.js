const Express = require('express')
const bodyParser = require('body-parser')

const app = Express()

app.use(bodyParser.json())

app.listen(8080, () => {
  console.log('Servidor ativo')
})

app.get('/get', (req, res) => {
  res.send('Este é um método GET')
})

app.put('/put', (req, res) => {
  res.send('Este é um método PUT')
})

app.post('/post', (req, res) => {
  res.send('Este é um método POST')
})

app.delete('/delete', (req, res) => {
  res.send('Este é um método DELETE')
})
