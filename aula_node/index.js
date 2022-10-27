const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const Sequelize = require('sequelize')

//Config
//Template Engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
//Conexão com o Banco de Dadoas MySql
const sequelize = new Sequelize('test', 'root', 'luc123', {
  host: 'localhost',
  dialect: 'mysql'
})
//Rotas
app.get('/cadastro', function (req, res) {
  res.render('formulario')
})

app.listen(8081, function () {
  console.log('Servidor Online! URL - http://localhost:8081')
})
