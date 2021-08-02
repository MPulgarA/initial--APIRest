const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersRoutePath = '/api/persons';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
       this.app.use(this.usersRoutePath, require('../routes/person'));
    }
    
    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;