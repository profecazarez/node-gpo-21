const express = require('express');
const bodyParser = require('body-parser');
const contactos = require('./contactos');
const puerto = 3000;

const app = express();
app.use(bodyParser.json())

app.listen(puerto, () => {
    console.log('servicio iniciado')
})


app.post('/contactos', async (req, res) => { // create
    const { nombre, correo, telefono } = req.body;
    const data = await contactos.create({
        nombre, correo, telefono   
    });
    res.send(data);
});

app.get('/contactos', async (req, res) => { // read
    const data = await contactos.findAll();
    res.send(data);
});

app.put('/contactos/:id', async (req, res) => { // update
    const { nombre, correo, telefono } = req.body;
    const { id } = req.params;
    const data = contactos.update({
        nombre, correo, telefono
    }, {
        where: {
            id
        }
    })
    res.send(data);
});
app.delete('/contactos/:id', async (req, res) => { // delete
    const { id } = req.params;
    const data = await contactos.destroy({
        where: {
            id
        }
    })
    res.send(data);
});