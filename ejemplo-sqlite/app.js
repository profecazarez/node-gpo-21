const clientes = require('./models/clientes')

const obtener = async () => {
    // obtener todos los registros de la tabla clientes
    const data = await clientes.findAll(); 
    console.log('data:', JSON.stringify(data))
}

obtener();