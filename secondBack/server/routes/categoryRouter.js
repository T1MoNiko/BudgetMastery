const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

router.post('/', categoryController.create.bind(categoryController));

module.exports = router;