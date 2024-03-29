const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            required: "Capture el nombre del proveedor",
            minlength: [1, "La longitud minima del nombre debe de ser de un caracter."],
            maxlength: [30, "La longitud máxima del nomrbe debe de ser menor a 30 caracteres."]
        },
        telefono:{
            type: Number,
            required: "Capture un número de teléfono",
            unique: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Proveedor',proveedorSchema);