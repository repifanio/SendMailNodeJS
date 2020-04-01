const {Router} = require('express');

const sendMailController = require('./controllers/SendMailController');

const router = Router();

router.get('/', sendMailController.send);

module.exports = router;