const productosController = {};

const Producto = require('../models/Productos');

//======================================================
//  LISTA DE PRODUCTOS
//======================================================
productosController.renderListaProductos = async (req, res, next) => {
    
    await Producto.find({}).lean()
        .then(producto => {
            res.render('./productos', 
            {
                layout: 'adminmain',
                productos: productos
            });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
    
}

//======================================================
//  LISTA DE PRODUCTOS CRUD
//======================================================
productosController.renderCrudProductos = async (req, res, next) => {
    
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

//======================================================
//  NUEVO PRODUCTO
//======================================================
productosController.newProducto = async (req, res, next) => {
    const {
        nombre, descripcion, categoria, proveedor
    } = req.body;

    const newProducto = new Producto(
        {
            nombre: nombre,
            descripcion: descripcion,
            categoria: categoria,
            proveedor: proveedor
        }
    );

    await newProducto.save()
    .then(producto => {
        res.redirect('/productos');
    })
    .catch(err => {
        console.log(err);
        res.status(400).redirect('/');
    });
}

//======================================================
//  EDITAR PRODUCTO
//======================================================
productosController.renderEditProducto = async (req, res, next) => {
    
    var _id = req.params.id;

    await Producto.findById(_id).lean()
        .then(producto => {
            res.render('./productos/editProducto', 
            {
                layout: 'adminmain',
                producto: producto
            });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
    
}
productosController.updateProducto = async (req, res, next) => {
    
    var _id = req.params.id;

    const {
        nombre: newnombre, 
        descripcion: newdescripcion, 
        categoria: newcategoria,
        proveedor: newproveedor
    } = req.body;

    await Producto.findByIdAndUpdate(
            _id,
            {
                nombre: newnombre,
                descripcion: newdescripcion,
                categoria: newcategoria,
                proveedor: newproveedor,
            }
        )
        .then(producto => {
            res.redirect('/productos');
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
    
}

//======================================================
//  ELIMINAR PRODUCTO
//======================================================
productosController.deleteProducto = async (req, res, next) => {
    
    var _id = req.params.id;

    await Producto.findByIdAndDelete(
            _id
        )
        .then(producto => {
            res.redirect('/productos');
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
    
}

module.exports = productosController;