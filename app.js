const express = require('express');
const routes = require('./routes');

class app{
    constructor(){
        this.server = express();
        this.server.use(routes);
    }
}

module.exports = new app().server;