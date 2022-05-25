const { Router } = require('express');
const router = Router();

const {
    renderBiciRefa,
    renderAcc,
    renderMod,
    renderMotoRef,
    renderMotoAc,
    Busqueda
} = require('../controllers/verproductos.controller');
router.get('/biciRefa',renderBiciRefa);
router.get('/biciAcc',renderAcc);
router.get('/biciMod',renderMod);
router.get('/motoRefa',renderMotoRef);
router.get('/MotoAcces',renderMotoAc);
router.get('/Busqueda',Busqueda);

module.exports = router;