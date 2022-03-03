const { Router } = require('express');
const usuarioControler = require('../controllers/usuarioController');

class UsuarioRouter {
    constructor() {
        this.router = Router();
        this.#config();
    }

    #config() {
        // Crear objeto usuarioController
        const objUsuarioC = new usuarioControler();

        // Crear Rutas
        this.router.get('/generartoken', objUsuarioC.generarToken);
        this.router.get('/usuarios', objUsuarioC.obtenerTodosLosUsuarios);
        this.router.get('/usuarios/apellido/:apellido', objUsuarioC.buscarPorApellido);
        this.router.get('/usuarios/:id', objUsuarioC.obtenerUsuarios);
        this.router.post('/usuarios', objUsuarioC.crearUsuarios);
        this.router.put('/usuarios/:id', objUsuarioC.actualizarUsuarios);
        this.router.delete('/usuarios', objUsuarioC.eliminarUsuarios);
    }
}

module.exports = UsuarioRouter;