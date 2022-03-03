const jwt = require('jsonwebtoken');
const PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

class tokenController{
    constructor(){
this.verifyAuth = this.verifyAuth.bind(this)
    }

    verifyAuth(req, res, next){    
        let token = this.getToken(req);
        let decode =  jwt.decode(token, PRIVATE_KEY);
        if(decode != null && decode != undefined){
            next();
        }else{
            res.status(401).json({info: "requiere autenticacion"}); 
        }
    }

    getToken(req){
        // Crear variable que me representa el toquen
        let token = null;
        //Obtener cabecera de la peticion
        let authorization = req.headers.authorization;
        //validar
        if(authorization != null && authorization != undefined){
        let arrayAuth = authorization.split(" ");
        token = arrayAuth[1];
        }
        return token;
    }

    
}

module.exports={
    tokenController,
    PRIVATE_KEY
}