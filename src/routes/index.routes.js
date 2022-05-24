const { Router } = require('express');
const router = Router();

const {
    renderHome,
    renderBiciRefa,
    renderAcc,
    renderMod,
    renderMotoRef,
    renderMotoAc
} = require('../controllers/index.controller');
router.get('/',renderHome);

router.get('/biciRefa',renderBiciRefa);
router.get('/biciAcc',renderAcc);
router.get('/biciMod',renderMod);
router.get('/motoRefa',renderMotoRef);
router.get('/MotoAcces',renderMotoAc);

module.exports = router;