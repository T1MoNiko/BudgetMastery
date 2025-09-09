const categoryService = require('../servises/categoryService')

class CategoryController {
    async create(req, res) {
        const {user_id, title} = req.body;
        console.log(req.body)
        try {
            const category = await categoryService.create(user_id, title);
            res.json(category);
        } catch (e) {
            res.status(502).json({ error: e.message || 'Ошибка регистрации' });
        }
    }

    async findBelongingTransactions(req, res) {
        
    }
}

module.exports = new CategoryController();