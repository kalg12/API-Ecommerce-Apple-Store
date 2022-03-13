/* Invocamos a mongoose */
const mongoose = require('mongoose');

/* Constante para conectar con la BD de Mongo */
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.SOURCE_DATABSE_MONGO)
        console.log('Base de datos conectada correctamente.');
    } catch (error) {
        console.log('Error de conexión en la base de datos: ', error);
    }
}

module.exports = dbConnection;