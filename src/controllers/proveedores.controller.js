const proveedorController = {};

const Proveedor = require('../models/Proveedor');

//======================================================
//  LISTA DE PROVEEDOR
//======================================================
proveedorController.renderListaProveedores = async (req, res, next) => {

    await Proveedor.find({}).lean()
        .then(proveedors => {
            res.render('./proveedores',
                {
                    layout: 'adminmain',
                    proveedors: proveedors
                });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });

}

//======================================================
//  LISTA DE PROVEEDOR CRUD
//======================================================
proveedorController.renderCrudProveedores = async (req, res, next) => {

    await Proveedor.find({}).lean()
        .then(proveedors => {
            res.render('./proveedores/crudProveedores',
                {
                    layout: 'adminmain',
                    proveedors: proveedors
                });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });

}

//======================================================
//  NUEVO PROVEEDOR
//======================================================
proveedorController.newProveedor = async (req, res, next) => {
    const {
        nombre, telefono
    } = req.body;

    const newProveedor = new Proveedor(
        {
            nombre: nombre,
            telefono: telefono
        }
    );

    await newProveedor.save()
        .then(proveedors => {
            res.redirect('/proveedores');
        })
        .catch(err => {
            console.log(err);
            res.status(400).redirect('/');
        });
}

//======================================================
//  EDITAR PROVEEDOR
//======================================================
proveedorController.renderEditProveedor = async (req, res, next) => {

    var _id = req.params.id;

    await Proveedor.findById(_id).lean()
        .then(proveedors => {
            res.render('./proveedores/editProveedor',
                {
                    layout: 'adminmain',
                    proveedors: proveedors
                });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });

}
proveedorController.updateProveedor = async (req, res, next) => {

    var _id = req.params.id;

    const {
        nombre: newnombre,
        telefono: newtelefono
    } = req.body;

    await Proveedor.findByIdAndUpdate(
        _id,
        {
            nombre: newnombre,
            telefono: newtelefono
        }
    )
        .then(proveedors => {
            res.redirect('/proveedores');
        })
        .catch(err => {
            res.status(400).redirect('/');
        });

}

//======================================================
//  ELIMINAR PROVEEDOR
//======================================================
proveedorController.deleteProveedor = async (req, res, next) => {

    var _id = req.params.id;

    await Proveedor.findByIdAndDelete(
        _id
    )
        .then(proveedors => {
            res.redirect('/proveedores');
        })
        .catch(err => {
            res.status(400).redirect('/');
        });

}

module.exports = proveedorController;