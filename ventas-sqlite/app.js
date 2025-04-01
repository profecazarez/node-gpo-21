const express = require('express')
const ventas = require('./models/ventas')
const app = express()
const puerto = 3000

app.listen(puerto, () => {
    console.log('servicio iniciado')
})

app.get('/ventas', async (req, res) => {
    const data = await ventas.findAll();
    res.send(data);
})
