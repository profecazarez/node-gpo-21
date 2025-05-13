const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './monedas.sqlite'
})

module.exports = sequelize;