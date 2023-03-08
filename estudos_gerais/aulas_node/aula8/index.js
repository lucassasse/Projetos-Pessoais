;(async () => {
  const db = require('./db')

  /*console.log('Novo cliente inserido')
  //await db.insereCliente({ nome: 'Marcio', idade: '26' })
  const nom = 'Guilherme'
  const ida = 24
  await db.insereCliente({ nome: nom, idade: ida })*/

  /*//await db.atualizaCliente(2, { nome: 'Fredesvilson', idade: '47' })
  const id = 2
  const nom = 'Fredesvilson'
  const ida = 47
  await db.atualizaCliente(id, { nome: nom, idade: ida })
  console.log('Cliente ' + id + ' atualizado')*/

  const id = 3
  await db.deletarCliente(id)
  console.log('Cliente deletado')
  console.log('Cliente ' + id + ' deletado')

  console.log('Listar todos os clientes')
  const clientes = await db.todosClientes()
  console.log(clientes)
})()
