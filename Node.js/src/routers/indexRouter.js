const express = require('express')

class IndexRouter {
    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        this.router.get('/', (req, res) => {
            console.log("nueva peticion GET")
            res.status(200).json({ mensaje: "Conexion exitosa" });
        })

        // this.router.get('/:nombre', (req, res)=>{
        //     let nombre = req.params.nombre;
        //     console.table({nombre});
        //     res.status(200).send();
        // })
    }
}

module.exports = IndexRouter;