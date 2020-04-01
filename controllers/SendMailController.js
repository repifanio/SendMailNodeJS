const mail = require('../lib/mail');

class SendMailController{
    send(req, res){
        mail.sendMail({
            to: 'Teste <teste@email.com>',
            subject: 'Teste de email',
            text: 'Esse email foi enviado em texto simples'
        })

        return res.send('Email enviado')
    }
}

module.exports = new SendMailController();