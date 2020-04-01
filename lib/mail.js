const nodemailer = require('nodemailer');
const mailConfig = require('../config/mailConfig');

class Mail {
    constructor(){
        const {host, port, secure, auth } = mailConfig;
        
        this.transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: auth.user ? auth : null
        })
    }

    sendMail(message){
        return this.transporter.sendMail({
            ...message,
            ...mailConfig.default
        })
    }
}

module.exports = new Mail();