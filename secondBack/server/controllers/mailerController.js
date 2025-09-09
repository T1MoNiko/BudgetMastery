const { sendMessage } = require("../servises/mailerService");

class MailerController {
    async sendMessageToEmail(req, res) {
        const {to, subject, text} = req.body;
        try {
            await sendMessage(to, subject, text);
            res.json({message: 'Сообщение успешно отправлено'});
        } catch (e) {
            res.json({message: 'Произошла ошибка при отправке сообщения'});
            throw e;
        }
    }
}

module.exports = new MailerController();