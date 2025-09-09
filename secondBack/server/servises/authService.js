const db = require('../../db');
const FUNCTIONS_MUTATIONS = require('../utils/mutations');
const FUNCTIONS_QUERIES = require('../utils/queries');

class AuthService {
    async register(email, password, name) {
        try {
            return (await db.query(FUNCTIONS_MUTATIONS.registerUser(), [name, email, password])).rows[0]
        } catch(e) {
            throw e
        }
    }

    async login(email, password) {
        try {
            const { rows } = await db.query(FUNCTIONS_QUERIES.loginUser(), [email, password]);

            if (rows.length === 0) {
                throw new Error('Неверный email или пароль');
            }

            return rows[0];
        } catch (e) {
            console.error(e)
            throw e;
        }
    }
}

module.exports = new AuthService();