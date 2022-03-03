const {Router} = require ('express');
const productController = require('../controllers/productController');
const { tokenController, PRIVATE_KEY } = require('../controllers/tokenController');

class productRouter{
    constructor(){
        this.router = Router();
        this.#config();
    }

    #config(){
        // Crear/configurar las rutas
        let objToken = new tokenController();
        // Requerir autentucacion para acceder a las rutas
        this.router.use(objToken.verifyAuth);
        // Crear objeto controlador
        const objProductC = new productController();
        // ----------Configurar las rutas--------- //
        this.router.post('/product', objProductC.create);
        this.router.get('/product', objProductC.get);
        this.router.put('/product', objProductC.update);
    }   
}

module.exports = productRouter;