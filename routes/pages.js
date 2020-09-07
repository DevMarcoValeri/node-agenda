const express = require('express');

const router = express.Router();

// Import controllers
const pagesController = require('../controllers/pages');

router.get('/menu', pagesController.getMenu);

module.exports = router;