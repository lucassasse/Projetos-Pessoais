const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'luc123', {
  host: 'localhost',
  dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

//Postagem.sync({ force: true })

/*Postagem.create({
  titulo: 'Um Título!',
  conteudo: 'Aqui vai o conteúdo sbla bla bla...'
})*/

const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})

//Usuario.sync({ force: true })

Usuario.create({
  nome: 'Lucas Eduardo',
  sobrenome: 'Sasse',
  idade: 24,
  email: 'lucas1sasse@gmail.com'
})
