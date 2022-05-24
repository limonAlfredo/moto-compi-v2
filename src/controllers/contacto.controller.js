contactController = {};
const contactoSchema = require('../models/Contacto');


contactController.renderCon = (req,res)=>{
    res.render('conozcanos/about');
}

contactController.sendContact = async (req, res, next) => {
    const {
        nombre, apellido, email, telefono
    } = req.body;

    const newUsuario = new contactoSchema(
        {
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono
        }
    );

    await newUsuario.save().then(usuarioRG => {
        res.redirect('/conozcanos');
    })
    .catch(err => {
        console.log(err);
        res.send('Ocurrio un error.');
    });
}
module.exports = contactController;