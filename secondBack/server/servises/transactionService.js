const db = require('../../db');
const FUNCTIONS_MUTATIONS = require('../utils/mutations');
const FUNCTIONS_QUERIES = require('../utils/queries');

class TransactionService {
    async createTransaction(user_id, title, amount) {
        try {
            const { rows } = await db.query(
                FUNCTIONS_MUTATIONS.createTransactionBasic(),
                [user_id, title, amount]
            );
            return rows[0];
        } catch (e) {
            console.error(e)
            throw e;
        }
    }

    async getUserTransactions(user_id) {
        try {
            const { rows } = await db.query(
                FUNCTIONS_QUERIES.getUserTransactions(),
                [user_id]
            );
            return rows;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new TransactionService();
