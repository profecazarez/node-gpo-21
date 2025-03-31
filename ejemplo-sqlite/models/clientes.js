const sequelize = require('../conexion')
const { DataTypes } = require('sequelize')

const clientes = sequelize.define('clientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    saldo: {
        type: DataTypes.DOUBLE
    }
}, {
    timestamps: false // para no crear los campos createdAt, updatedAt
}
)

module.exports = clientes;