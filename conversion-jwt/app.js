const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const monedas = require('./monedas') // para utilizar el modelo monedas de la bd
const { Op } = require('sequelize') // para utilizar operadores de sequelize

const app = express()
const puerto = 3000

const secretKey = 'secret'

app.use(bodyParser.json())

app.listen(puerto, () => {
    console.log('servicio iniciado')
})

app.post('/login', (req, res) => {
    const { usuario, password } = req.body;
    if (usuario == 'admin' && password == '123') {
        const token = jwt.sign({ usuario }, secretKey, { expiresIn: '1h' }); // utilizar JWT
        res.send(token)
    } else {
        res.status(404);
    }
})

function verificarToken(req, res, next) { // middleware 
    const header = req.header('Authorization') || '';
    const token = header.split(' ')[1];
    if (!token) {
        res.status(401).json({mensaje: 'Token no proporcionado'});
    } else {
        try {
            const payload = jwt.verify(token, secretKey);
            next();
        } catch {
            res.status(401).json({mensaje: 'Token incorrecto'});
        }
    }
}

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

app.get('/monedas/', verificarToken, async (req, res) => {

    const data = await monedas.findAll();

    res.send(data)

})