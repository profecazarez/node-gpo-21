const express = require('express');
const fs = require('fs'); // para utilizar el sistema de archivos
const app = express();
const puerto = 3000;
const path = './clientes.json'; // ruta del archivo JSON (cliente.json)

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// crear el servidor web
app.listen(puerto, () => {
    console.log('Servidor web iniciado.');
});

// --- rutas ---
app.get('/clientes', (req, res) => {
    // obtener los datos desde el archivo JSON (clientes.json)
    fs.readFile(path, (err, data) => { // leer el archivo
        // el contenido del archivo queda en la variable data
        if (err) { // si hay un error
            res.sendStatus(500);
        } else { // si no hay error, se envía data
            const clientes = JSON.parse(data); // convertir el texto a JSON
            res.send(clientes);
        }
    });
});

app.post('/clientes', (req, res) => {
    const contenido = req.body; 
    // obtener los datos desde el archivo JSON (clientes.json)
    fs.readFile(path, (err, data) => { // leer el archivo
        // el contenido del archivo queda en la variable data
        if (err) { // si hay un error
            res.sendStatus(500);
        } else { // si no hay error, se envía data
            const clientes = JSON.parse(data); // convertir el texto a JSON
            // agregamos contenido al json
            clientes.push(contenido);

            // guardar el nuevo archivo de clientes
            fs.writeFile(path, JSON.stringify(clientes), (err) => {
                if (err) {
                    res.sendStatus(500);
                }
                res.send(clientes);
            })
            
        }
    });
});


/*
    notepad.link/DT4TU   <--código
    notepad.link/PCcFZ   <--JSON
*/