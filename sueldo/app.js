const express = require('express')
const app = express()
const puerto = 3000

// crear servidor web
app.listen(puerto, () => {
    console.log('servidor web iniciado')
})

// rutas
app.get('/sueldo/:tipo/:dias', (req, res) => {
    const { tipo, dias } = req.params;

    // validaciones
    if (tipo < 1 || tipo > 3) {
        res.sendStatus(400); // bad request - tipo de empleado incorrecto
    }
    if (dias > 28 || dias < 0) {
        res.sendStatus(400); // bad request - dias trabajados incorrecto
    }

    let sueldoDiario, sueldoMensual, bono = 0;
    
    switch(parseInt(tipo)) { // forzar que el tipo sea int
        case 1: // base
            sueldoDiario = 300;
            bono = 3000;
        break;
        case 2: // honorarios
            sueldoDiario = 450;
            bono = 2700;
        break;
        case 3: // eventual
            sueldoDiario = 500;
            bono = 500;
        break;
    }

    // verificar si le corresponde el bono mensual
    if (dias < 25) {
        bono = 0;
    }

    // calcular el sueldo mensual
    sueldoMensual = dias * sueldoDiario + bono;

    const data = {
        tipo,
        dias,
        sueldoDiario,
        bono,
        sueldoMensual
    };

    res.send(data);

})
