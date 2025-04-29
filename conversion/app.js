const express = require('express')
const bodyParser = require('body-parser')
const monedas = require('./monedas') // para utilizar el modelo monedas de la bd
const { Op } = require('sequelize') // para utilizar operadores de sequelize

const app = express()
const puerto = 3000

app.use(bodyParser.json())

app.listen(puerto, () => {
    console.log('servicio iniciado')
})

app.post('/convertir/', async (req, res) => {
    const { origen, destino, cantidad } = req.body;
    let resultado = 0;
    
    // obtener de la base de datos la moneda a convertir
    const data = await monedas.findOne({
        where: {
            [Op.and]: [{ origen }, { destino }],
        }
    });

    if (!data) {
        res.sendStatus(404);
    }

    const { valor } = data;
    resultado = cantidad * valor;

    res.send({
        origen,
        destino,
        cantidad,
        resultado
    })

})

app.get('/monedas/', async (req, res) => {

    const data = await monedas.findAll();

    res.send(data)

})