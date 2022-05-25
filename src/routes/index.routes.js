const { Router } = require('express');
const router = Router();

const {
    renderHome
} = require('../controllers/index.controller');
router.get('/',renderHome);

module.exports = router;