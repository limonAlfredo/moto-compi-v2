const mongoose = require('mongoose');

const refaMotoSchema = new mongoose.Schema(
    {
        Nombre_Refaccion:{
            type: String,
            required: "Capture el nombre del Accesorio",
            minlength: [1, "La longitud minima del nombre debe de ser de un caracter."],
            maxlength: [30, "La longitud máxima del nomrbe debe de ser menor a 30 caracteres."]
        },
        Descripcion_Refaccion:{
            type: String,
            required: "Capture una descripción",
            minlength: [1, "La longitud minima del nombre debe de ser de un caracter."]   
        },
        Estado_Oferta:{
            type: boolean,
            required: "Seleccione si es una oferta"
        },
        Proveedor:{
            type: String,
            required: "Seleccione un proveedor",
            minlength: [1, "La longitud minima del proveedor debe de ser de un caracter."],
            maxlength: [30, "La longitud máxima del proveedor debe de ser menor a 30 caracteres."]
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Refacciones_Motocicletas', refaMotoSchema);