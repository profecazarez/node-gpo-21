const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './crud.sqlite' // archivo de base de datos
});

module.exports = sequelize;