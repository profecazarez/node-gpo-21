const express = require('express')
const fs = require('fs') // file system (sistema de archivos)
const app = express()
const puerto = 3000

// configurar body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// crear el servidor web
app.listen(puerto, () => {
    console.log('Servidor web iniciado')
})

// crear rutas
app.post('/credito', (req, res) => {

    const { 
            numeroCredito, 
            claveCliente, 
            nombreCliente, 
            importe, 
            pagoMensual, 
            fechaInicio, 
            fechaTermino 
        } = req.body;

        const path = `./creditos-${numeroCredito}.json`;

        const credito = {
            numeroCredito, 
            claveCliente, 
            nombreCliente, 
            importe, 
            pagoMensual, 
            fechaInicio, 
            fechaTermino 
        }

        // validaciones
        fs.writeFile(path, JSON.stringify(credito), (err) => {
            res.send('OK');
        })

});