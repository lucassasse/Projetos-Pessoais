const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'luc123',
  database: 'crudgames',
  insecureAuth: true
})

app.use(cors())
app.use(express.json())

app.listen(3001, () => {
  console.log('Rodando servidor!!!')
})
