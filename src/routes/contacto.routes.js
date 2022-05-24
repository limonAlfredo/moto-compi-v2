const { Router } = require('express');
const router = Router();

const {
    renderCon,
    sendContact
} = require('../controllers/contacto.controller');

router.get('/conozcanos',renderCon);
router.post('/conozcanos',sendContact);
module.exports = router;