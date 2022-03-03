const {Router} = require('express');

class indexRouter{
    constructor(){
        this.router = Router();
        this.#config();
    }

    #config(){
        this.router.get('/', (res, req) =>{
            res.statusCode(200).json({message: "Todo ok"})
        })
    }
}

module.exports = indexRouter;