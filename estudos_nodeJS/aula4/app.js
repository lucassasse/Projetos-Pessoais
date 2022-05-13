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
  if (err) console.error('Error connecting: ' + err.stack)
  return
})

connection.query('DELETE FROM users WHERE id = 3', function (err, result) {
  if (!err) {
    console.log('Usuário Apagado')
  } else {
    console.log('Erro ao Apagar')
  }
})

/*
connection.query(
  "UPDATE users SET nome = 'Julio' WHERE id = 7",
  function (err, result) {
    if (!err) {
      console.log('Usuário Editado')
    } else {
      console.log('Erro ao Editar')
    }
  }
)
*/

/*
connection.query(
  "INSERT INTO users(nome, email) VALUES ('Pedro', 'pedro@email.com')",
  function (err, result) {
    if (!err) {
      console.log('Usuário cadastrado com sucesso!')
    } else {
      console.log('Erro ao cadastrar o usuário!')
    }
  }
)
*/

/*
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
*/
