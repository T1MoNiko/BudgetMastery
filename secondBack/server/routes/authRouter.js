const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/reg', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));

module.exports = router;