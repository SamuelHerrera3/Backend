//configurar variables de entorno
require('dotenv').config();
//Importar dependencias
const express = require('express');
const morgan = require('morgan');
const ConnDB = require('./database/connDb');
//importar modulos/clases
const indexRouter = require('./routers/indexRouter');
const productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');


class serve {
    constructor() {
        console.log("Password ==> ", process.env.Npassword);
        this.objConn = new ConnDB();
        this.app = express();
        this.#config();
    }

    #config() {
        //Indicar al servidor los datos que va a procesar
        //JSON peticiones http
        this.app.use(express.json());
        //usar morgan para el monitoreo de las peticiones
        this.app.use(morgan());
        //almancenar el puerto que usara el servidor
        this.app.set('PORT', process.env.PORT || 3000);
        // ----------CREAR RUTAS---------- //
        const indexR = new indexRouter();
        const userR = new userRouter();
        const productR = new productRouter();
        // ----------AÑADIR RUTAS A EXPRESS---------- //
        this.app.use(indexR.router);
        this.app.use(userR.router);
        this.app.use(productR.router);
        //Poner el servidor a la escucha 
        this.app.listen(this.app.get('PORT'), () => {
            console.log("Servidor corriendo por el puerto ====> ", this.app.get('PORT'))
        })
    }
}

new serve