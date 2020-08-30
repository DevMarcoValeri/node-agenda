const express = require('express');

const router = express.Router();

// Import controllers
const adminController = require('../controllers/admin');

router.post('/', adminController.getLogin);

router.get('/', adminController.getHome);

module.exports = router;