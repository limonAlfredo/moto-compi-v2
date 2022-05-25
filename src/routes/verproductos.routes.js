const { Router } = require('express');
const router = Router();

const {
    renderBiciRefa,
    renderAcc,
    renderMod,
    renderMotoRef,
    renderMotoAc
} = require('../controllers/verproductos.controller');
router.get('/biciRefa',renderBiciRefa);
router.get('/biciAcc',renderAcc);
router.get('/biciMod',renderMod);
router.get('/motoRefa',renderMotoRef);
router.get('/MotoAcces',renderMotoAc);

module.exports = router;