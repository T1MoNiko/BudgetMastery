const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});

console.log(process.env.GMAIL_ADDRESS)

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.GMAIL_ADDRESS, 
        pass: process.env.GMAIL_PASSWORD, 
    },
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.GMAIL_ADDRESS,
        to,
        subject, 
        text, 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Ошибка при отправке:', error);
        }
        console.log('Письмо отправлено:', info.response);
    });
};

module.exports = sendEmail;