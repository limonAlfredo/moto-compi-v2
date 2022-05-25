const { Router } = require('express');
const router = Router();

const {
    renderEntrar,
    Entrar,
    renderRegistrarse,
    Registrarse
} = require('../controllers/admin.controller');

router.get('/entrar',renderEntrar);
router.post('/entrar',Entrar);
router.get('/registrarse',renderRegistrarse);
router.post('/registrarse',Registrarse);
module.exports = router;