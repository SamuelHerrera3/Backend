const { Router } = require('express');
const userController = require('../controllers/userController');

class userRouter {
    constructor() {
        this.router = Router();
        this.#config();

    }

    #config() {
        //Crear objeto de tipo userController
        const userC = new userController();
        //Configurar rutas
        this.router.post('/user', userC.register);
        this.router.post('/user/auth', userC.login);
    }
}

module.exports = userRouter;