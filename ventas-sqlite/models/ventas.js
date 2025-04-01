const { DataTypes } = require('sequelize');
const sequelize = require('../conexion')

const ventas = sequelize.define('ventas',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.STRING
    },
    cliente: {
        type: DataTypes.STRING
    },
    importe: {
        type: DataTypes.DOUBLE
    }
},{
    timestamps: false // para NO mapear createdAt y updatedAt
});

module.exports = ventas;