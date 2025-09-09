const db = require('../../db');
const FUNCTIONS_MUTATIONS = require('../utils/mutations');
const FUNCTIONS_QUERIES = require('../utils/queries');

class CategoryService {
    async create(userId, title) {
        try {
            return (await db.query(FUNCTIONS_MUTATIONS.createCategory(), [userId, title])).rows[0]
        } catch(e) {
            throw e
        }
    }

}

module.exports = new CategoryService();