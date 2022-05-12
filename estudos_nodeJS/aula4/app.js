const express = require('express')

const app = express()

//Conexão com BD MySQL

const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'lucasone',
  password: '123456',
  database: 'lucas'
})

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

connection.query('SELECT * FROM users', function (err, rows, fields) {
  if (!err) {
    console.log('Resultado: ', rows)
  } else {
    console.log('Erro ao realizar a consulta')
  }
})

//Conexão com BD MySQL

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/index.html')
})

app.get('/sobre', function (req, res) {
  res.sendFile(__dirname + '/src/sobre_empresa.html')
})

app.get('/blog', function (req, res) {
  res.send('Pagina do blog')
})

app.get('/contato', function (req, res) {
  res.send('Pagina de contato')
})

app.listen(8080)
