const verProdCtrl = {};
const productoSchema = require("../models/Productos");

//Categoria RFBici
verProdCtrl.renderBiciRefa = async (req, res, next) => {
    await productoSchema.find({
        categoria: "RFBici"
    }).lean()
        .then(productos => {
            res.render('prod',
                {
                    layout: 'main',
                    productos: productos
                });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
}

//Categoria ACBici
verProdCtrl.renderAcc = async (req, res, next) => {
    await productoSchema.find({
        categoria: "ACBici"
    }).lean()
        .then(productos => {
            res.render('prod',
                {
                    layout: 'main',
                    productos: productos
                });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
}

//Categoria MODBici
verProdCtrl.renderMod = async (req, res, next) => {
    await productoSchema.find({
        categoria: "MODBici"
    }).lean()
        .then(productos => {
            res.render('prod',
                {
                    layout: 'main',
                    productos: productos
                });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
}

//Categoria RFMoto
verProdCtrl.renderMotoRef = async (req, res, next) => {
    await productoSchema.find({
        categoria: "RFMoto"
    }).lean()
        .then(productos => {
            res.render('prod',
                {
                    layout: 'main',
                    productos: productos
                });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
}


//Categoria ACMoto
verProdCtrl.renderMotoAc = async (req, res, next) => {
    await productoSchema.find({
        categoria: "ACMoto"
    }).lean()
        .then(productos => {
            res.render('prod',
                {
                    layout: 'main',
                    productos: productos
                });
        })
        .catch(err => {
            res.status(400).redirect('/');
        });
}


//Busqueda
function escapeRegex(q) {
    return q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
verProdCtrl.Busqueda = async (req, res, next) => {
    var regex = new RegExp(escapeRegex(req.query.q),'gi');
    if (req.query.q) {
        await productoSchema.find({
            nombre: regex
        }
        ).lean()
            .then(productos => {
                res.render('prod',
                    {
                        layout: 'main',
                        productos: productos
                    });
            })
            .catch(err => {
                res.status(400).redirect('/');
            });
    }
}

module.exports = verProdCtrl;