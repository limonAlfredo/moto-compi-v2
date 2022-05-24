const indexCtrl = {};


indexCtrl.renderHome = (req, res)=>{
    res.render('home',{title:"MOTOpartes el Gavi"});
}
indexCtrl.renderBiciRefa = (req, res)=>{
    res.render('prod',{
        title:"Refacciones para Motocicleta",
        productos:[
            {id: 1, nombre: "Cámaras para bicicletas", path: "/img/Bicicletas/Refacciones/camara.jpg"},
            {id: 2, nombre: "Llantas para bicicletas", path: "/img/Bicicletas/Refacciones/llanta.jpg"},
            {id: 3, nombre: "Rines para bicicletas", path: "/img/Bicicletas/Refacciones/rin.jpg"}
        ]
    })
}
indexCtrl.renderAcc = (req, res)=>{
    res.render('prod',{
        title:"Accesorios para Bicicleta",
        productos:[
            {id: 1, nombre: "Luces para bicicletas", path: "/img/Bicicletas/Accesorios/luz.jpg"},
            {id: 2, nombre: "Parrillas para bicicletas", path: "/img/Bicicletas/Accesorios/parrilla.jpg"}
        ]
    })
}
indexCtrl.renderMod = (req, res)=>{
    res.render('prod',{
        title:"Bicicletas Disponibles",
        productos:[
            {id: 1, nombre: "Bicicleta para Montañismo", path: "/img/Bicicletas/Modelos/montaña.jpg"},
            {id: 2, nombre: "Bicicleta para niñas", path: "/img/Bicicletas/Modelos/niña.jpg"},
            {id: 3, nombre: "Bicicleta de salto", path: "/img/Bicicletas/Modelos/salto.jpg"}
        ]
    })
}

indexCtrl.renderMotoRef = (req, res)=>{
    res.render('prod',{
        title:"Refacciones para Motocicleta",
        productos:[
            {id: 1, nombre: "Llantas para Motocicletas", path: "/img/Motos/Refacciones/llanta.png"},
            {id: 2, nombre: "Sillones para Motocicletas", path: "/img/Motos/Refacciones/sillon.jpg"}
        ]
    })
}

indexCtrl.renderMotoAc = (req, res)=>{
    res.render('prod',{
        title:"Accesorios para Motocicleta",
        productos:[
            {id: 1, nombre: "Cascos para Motocicletas", path: "/img/Motos/Accesorios/casco.jpg"},
            {id: 2, nombre: "Guantes para Motocicletas", path: "/img/Motos/Accesorios/guantes.jpg"}
        ]
    })
}

module.exports = indexCtrl;