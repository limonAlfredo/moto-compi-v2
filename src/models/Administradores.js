const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuariosSchema = new mongoose.Schema(
    {
        Nombre_Admin: {
            type: String,
            required: "Capture su nombre.",
            minlength: [1, "La longitud mínima del nombre es de un caracter."],
            maxlength: [100,"El nombre tiene demasiados caracteres (máximo 100)."]
        },
        contraseña: {
            type: String,
            required: "Capture su contraseña.", 
            minlength:[3,"La contraseña debe tener al menos 3 caracteres."]
        }
    },
    {
        timestamps: true,
    }
);

usuariosSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

usuariosSchema.methods.matchPassword = async function (password){
    //Se utiliza una function en ES6 para acceder a la instancia actual
    return await bcrypt.compare(password, this.contraseña);
};

module.exports = mongoose.model("Administradores", usuariosSchema);