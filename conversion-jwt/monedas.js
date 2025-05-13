const { DataTypes } = require('sequelize');
const sequelize = require('./conexion');

const monedas = sequelize.define('monedas', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    origen: { type: DataTypes.STRING },
    destino: { type: DataTypes.STRING},
    valor: { type: DataTypes.DOUBLE }
}, {
    timestamps: false
});

module.exports = monedas;
