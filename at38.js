//Implemente e trate uma conexão com o seu banco de dados, usando JavaScript. Caso a conexão com o banco tenha sucesso, ele deve retornar uma frase positiva. Se isso não ocorrer, retorne uma frase informando o erro.

// Libs instaladas: sequelize, mysql2

//Arquivo index.js
const database = require('./db')

database
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida')
  })
  .catch(() => {
    console.log('Erro de conexão')
  })

// arquivo db.js, conexão com o DB

const Sequelize = require('sequelize')
const sequelize = new Sequelize('softex', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
})

module.exports = sequelize
