const {Router} = require('express');
const router = Router();
const {
    renderListaProveedores,
    renderCrudProveedores,
    renderEditProveedor,
    updateProveedor,
    deleteProveedor,
    newProveedor
} = require('../controllers/proveedores.controller');

//======================================================
//  LISTA DE PROVEEDORES
//======================================================
router.get('/proveedores/listaProveedores', renderListaProveedores);

//======================================================
//  LISTA DE PROVEEDORES DEL CRUD
//======================================================
router.get('/proveedores', renderCrudProveedores);

//======================================================
//  NUEVO UN PROVEEDORES
//======================================================
router.post('/proveedores/new', newProveedor);

//======================================================
//  EDITAR UN PROVEEDOR
//======================================================
router.get('/proveedores/edit/:id', renderEditProveedor);
router.put('/proveedores/edit/:id', updateProveedor);

//======================================================
//  ELIMINAR UN PROVEEDOR
//======================================================
router.delete('/proveedores/delete/:id', deleteProveedor);

module.exports = router;