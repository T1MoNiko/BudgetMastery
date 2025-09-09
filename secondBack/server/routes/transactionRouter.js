const express = require('express');
const transactionController = require('../controllers/transactionController');
const router = express.Router();

router.post('/', transactionController.createTransaction.bind(transactionController));
router.get('/:user_id', transactionController.getUserTransactions.bind(transactionController));

module.exports = router;
