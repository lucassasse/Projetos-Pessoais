const mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'todo_list_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

// connection.query('SELECT * FROM todos', (err, rows) => {
//   if (err) {
//     console.error('Erro ao executar a consulta:', err);
//     return;
//   }
//   console.log('Resultado da consulta:', rows);
// });

connection.end();
