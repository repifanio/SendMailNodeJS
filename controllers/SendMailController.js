const mail = require('../lib/mail');

class SendMailController{
    async send(req, res){
        await mail.sendMail({
            to: 'Teste <teste@email.com>',
            subject: 'Teste de email',
            template: 'information',
            context: {
                varExemplo: 'Nome de Exemplo'
            }

        })
        return res.send('Email enviado')
    }
}

module.exports = new SendMailController();