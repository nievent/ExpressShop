const express = require('express');
const authController = require('../controller/auth.controller');
const authController = require('../controller/auth.controller');
const router = express.Router();

router.get('/singnup', authController.getSignup);

router.get('/login', authController.getLogin);

module.exports = router;