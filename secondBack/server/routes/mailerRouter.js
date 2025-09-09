const express = require('express');
const mailerController = require('../controllers/mailerController');
const router = express.Router();

router.post('/', mailerController.sendMessageToEmail.bind(mailerController))

module.exports = router;