const authService = require('../servises/authService')

class AuthController {
    async register(req, res) {
        const {email, password, name} = req.body;
        console.log(req.body)
        try {
            const user = await authService.register(email, password, name);
            res.json(user);
        } catch (e) {
            res.status(502).json({ error: e.message || 'Ошибка регистрации' });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await authService.login(email, password);
            res.json(user);
        } catch (e) {
            res.status(401).json({ error: e.message || 'Ошибка авторизации' });
        }
    }
}

module.exports = new AuthController();