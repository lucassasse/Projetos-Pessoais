const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre', function (req, res) {
  res.sendFile(__dirname + '/html/sobre.html')
})

app.get('/blog', function (req, res) {
  res.send('Aqui fica o blog!')
})

app.get('/ola/:cargo/:nome/:salario', function (req, res) {
  res.send(
    '<h1>Ola ' +
      req.params.nome +
      '</h1>' +
      '<h2>Seu cargo e: ' +
      req.params.cargo +
      '</h2>' +
      '<h3>Seu salario e: R$' +
      req.params.salario +
      '</h3>'
  )
})

app.listen(8081, function () {
  console.log('Servidor Rodando na URL http://localhost:8081')
})

/*
-Iniciar MySQL:
mysql -h localhost -u root -p

-Criar Banco da Dados:
CREATE DATABASE;

-Mostrar Bancos Existentes:
SHOW DATABASES;

-Editar Banco:
USE nomeDoBanco;

-Criar tabela MySQL:
CREATE TABLE usuario(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

-Mostrar Tabelas Existentes:
SHOW TABLES;

-Mostrar informações sobre a Tabela:
DESCRIBE nomeDaTabela;

-Inserir dados na tabela:
INSERT INTO nomeDaTabela(nome, email, idade) VALUES(
  "Nome da Pessoa",
  "teste@email.com",
  18
);

-Mostrar Dados da Tabela:
SELECT * FROM nomeDaTabela;

-Listar Linha(s) da Tabela:
SELECT * FROM nomeDaTabela WHERE idade >= 18;;
SELECT * FROM nomeDaTabela WHERE nome = "Lucas";

-Deletar Dado da Tabela
DELETE FROM nomeDaTabela WHERE idade <= 18;
DELETE FROM nomeDaTabela WHERE nome = "Andre";

-Editar Dados da Tabela:
UPDATE nomeDaTabela SET campoDado = "Alteração do Dado" WHERE campo = "Dado antigo";
UPDATE NomeDaTabela SET email = "novo.email@email.com" WHERE email = "email.antigo@email.com";
*/
