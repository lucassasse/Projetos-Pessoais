const Sequelize = require('sequelize')

const sequelize = new Sequelize('lucas', 'lucasone', '123456', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(function () {
    console.log('Conectado com sucesso')
  })
  .catch(function (err) {
    console.log('Erro ao se conectar com o BD' + err)
  })

const Pagamento = sequelize.define('Pagamentos', {
  nome: {
    type: Sequelize.STRING
  },
  valor: {
    type: Sequelize.DOUBLE
  }
})

Pagamento.sync({ force: true })

Pagamento.create({ nome: 'produto1', valor: 10 })
