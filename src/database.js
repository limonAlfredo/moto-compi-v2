const mongoose = require('mongoose');

const CADENA_CONEXION = 'mongodb://localhost/moto-compi';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
};

mongoose.connect(CADENA_CONEXION, options)
    .then(db => console.log("Conexión a BD exitosa"))
    .catch(err => console.log("No hay conexión con la BD: " + err));