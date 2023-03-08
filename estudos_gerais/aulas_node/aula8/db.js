const conectar = async () => {
  if (global.conexao && global.conexao.state != 'disconected') {
    return global.conexao
  }
  const mysql = require('mysql2/promise')
  const con = mysql.createConnection('mysql://root:luc123@localhost:3306/db')
  console.log('Conexão bem sucedida!')
  global.conexao = con
  return con
}

//select
const todosClientes = async () => {
  const con = await conectar()
  const [linhas] = await con.query('SELECT * FROM db.cliente_node')
  return await linhas
}

//insert
const insereCliente = async cliente => {
  const con = await conectar()
  const sql = 'INSERT INTO db.cliente_node (nome, idade) VALUES (?,?)'
  const valores = [cliente.nome, cliente.idade]
  await con.query(sql, valores)
}

//update
const atualizaCliente = async (id, cliente) => {
  const con = await conectar()
  const sql = 'UPDATE db.cliente_node SET nome=?, idade=? WHERE id=?'
  const valores = [cliente.nome, cliente.idade, id]
  await con.query(sql, valores)
}

//delete
const deletarCliente = async id => {
  const con = await conectar()
  const sql = 'DELETE FROM db.cliente_node WHERE id=?'
  const valores = [id]
  await con.query(sql, valores)
}

module.exports = {
  todosClientes,
  insereCliente,
  atualizaCliente,
  deletarCliente
}
