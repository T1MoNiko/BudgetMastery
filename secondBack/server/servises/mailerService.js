const sendEmail = require("../utils/mailer");


class MailerService {
    sendMessage(to, subject, text) {
        sendEmail(to, subject, text)
    }
}

module.exports = new MailerService();