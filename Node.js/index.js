//importar expess
const express = require('express');
//importar mongoose
const mongoose = require('mongoose'); 
// Importar las rutas
const IndexRouter = require('./src/routers/indexRouter');
const UsuarioRouter = require('./src/routers/usuarioRouter');
// I,portar la base de datos
const {db} = require('./src/database/db');

class Server {
    // llamar al constructor
    constructor() {
        this.connDb();
        // crear aplicacion express
        this.app = express();
        this.config();
    }

    config() {

        this.app.use(express.json());
        this.app.set('PORT', process.env.PORT || 3000);

        // Crear ruta
        let indexR = new IndexRouter();
        let usuarioR = new UsuarioRouter();

        // Añadir ruta express
        this.app.use(indexR.router);
        this.app.use(usuarioR.router);

        // poner a la escucha al servidor
        this.app.listen(this.app.get('PORT'), () => {
            console.log("servidor corriendo por el puerto => ", this.app.get('PORT'))
        });
    }

    connDb(){
        mongoose.connect(db).then(() =>{
            console.log("Conexion exitosa a la base de datos")
        }).catch(error=>{
            console.log("Error al conectar a la base de Datos")
            console.error(error)
        });
        
    }
}

new Server()