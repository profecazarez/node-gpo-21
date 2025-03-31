const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './clientes.sqlite'
})

module.exports = sequelize;