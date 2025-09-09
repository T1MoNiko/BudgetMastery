const transactionService = require('../servises/transactionService')

class TransactionController {
    async createTransaction(req, res) {
        const { user_id, title, amount } = req.body;

        try {
            console.log(user_id, title, amount)
            const result = await transactionService.createTransaction(user_id, title, amount);
            res.json(result);
        } catch (e) {
            res.status(500).json({ error: e.message || 'Ошибка создания транзакции' });
        }
    }

    async getUserTransactions(req, res) {
        const userId = parseInt(req.params.user_id);

        try {
            const transactions = await transactionService.getUserTransactions(userId);
            res.json(transactions);
        } catch (e) {
            res.status(500).json({ error: e.message || 'Ошибка получения транзакций' });
        }
    }
}

module.exports = new TransactionController();
