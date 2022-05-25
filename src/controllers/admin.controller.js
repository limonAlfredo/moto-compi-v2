adminController = {};
const adminSchema = require('../models/Administradores');
const Producto = require('../models/Productos');

//Iniciar Sesion
adminController.renderEntrar = (req, res, next) => {
    res.render('entrar');
}
adminController.Entrar = async (req, res, next) => {
    const {
        nombre, password
    } = req.body;

    let adminEncontrado = await adminSchema.findOne({nombre: nombre});
    if(!adminEncontrado){
        res.send("Administrador no encontrado.")
    }
    else{
        const resultado = await adminEncontrado.matchPassword(password);
        if(resultado){
            await Producto.find({}).lean()
        .then(productos => {
            res.render('./productos/crudProductos', 
            {
                layout: 'adminmain',
                productos: productos
            });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
        }
        else{
            res.send("Correo electrónico y contraseña no validos.")
        }
    }
}

//Registrar
adminController.renderRegistrarse = (req, res, next) => {
    res.render('registrarse', {layout: 'main'});
}
adminController.Registrarse = async (req, res, next) => {
    const {
        nombre, password
    } = req.body;

    const newAdmin = new adminSchema(
        {
            nombre: nombre,
            password: password
        }
    );

    newAdmin.password = await newAdmin.encryptPassword(password);
    await newAdmin.save().then(usuarioRG => {
        res.redirect('/entrar');
    })
    .catch(err => {
        console.log(err);
        res.send('Ocurrio un error.');
    });
}

module.exports = adminController;