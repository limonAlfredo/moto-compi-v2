const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            required: "Capture el nombre de la bicicleta",
            minlength: [1, "La longitud minima del nombre debe de ser de un caracter."],
            maxlength: [30, "La longitud máxima del nomrbe debe de ser menor a 30 caracteres."]
        },
        descripcion:{
            type: String,
            required: "Capture una descripción",
            minlength: [1, "La longitud minima del nombre debe de ser de un caracter."]   
        },
        categoria:{
            type: String,
            required: "Seleccione una categoria",
            minlength: [1, "La longitud minima del proveedor debe de ser de un caracter."]

        },
        proveedor:{
            type: String,
            required: "Seleccione un proveedor",
            minlength: [1, "La longitud minima del proveedor debe de ser de un caracter."]
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Productos', productoSchema);