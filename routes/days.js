const express = require('express');

const router = express.Router();

// Import controllers
const daysControllers = require('../controllers/days');

router.post('/01012021', daysControllers.getNote);

router.post('/01012021', daysControllers.deleteNote);

router.get('/01012021', daysControllers.getDay);

module.exports = router;