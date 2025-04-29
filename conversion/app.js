const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const puerto = 3000

app.use(bodyParser.json())

app.listen(puerto, () => {
    console.log('servicio iniciado')
})

app.post('/convertir/', (req, res) => {
    const { origen, destino, cantidad } = req.body;
    const valor = 19.58;
    let resultado = 0;
    if (origen == 'MXN') {
        resultado = cantidad / valor;
    } else if(origen == 'USD') {
        resultado = cantidad * valor;
    }
    res.send({
        origen,
        destino,
        cantidad,
        resultado
    })

})