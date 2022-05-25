const mongoose = require('mongoose');

let email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Coloca un correo electrónico válido"];

const contactoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: "Capture su nombre.",
            minlength: [1, "La longitud mínima del nombre es de un caracter."],
            maxlength: [100,"El nombre tiene demasiados caracteres (máximo 100)."]
        },
        apellido: {
            type: String,
            required: "Capture su apellido paterno.",
            minlength: [1, "La longitud mínima del apellido paterno es de un caracter."],
            maxlength: [100,"El apellido paterno tiene demasiados caracteres (máximo 100)."]
        },
        email: {
            type: String, 
            required: "Capture su correo electrónico.",
            match: email_match,
        },        
        telefono: {
            type: Number,
            required: "Capture un número de teléfono",
            unique: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contacto", contactoSchema);