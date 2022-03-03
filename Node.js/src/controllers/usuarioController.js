const Usuario = require('../models/usuarios');
const jwt = require('jsonwebtoken');

const usuarios = [
    { id: 1, nombre: "juan", apellido: "perez" },
    { id: 2, nombre: "pedro", apellido: "picapiedras" },
    { id: 3, nombre: "jairo", apellido: "quintero" },
    { id: 4, nombre: "cristian", apellido: "hernandez" }
] 

class usuarioControler{
    crearUsuarios(req, res) {
        let objUsuario = req.body;
        if(objUsuario.nombre && objUsuario.apellido){
            Usuario.create(objUsuario, (error, data)=>{
                if(error){
                    res.status(500).send();
                }else{
                    res.status(201).json(data);
                }
            });
        }else{
            res.status(400).send();
        }
    }

    obtenerTodosLosUsuarios(req, res){
        Usuario.find((error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(201).json(data);
            }
        });
    }

    obtenerUsuarios(req, res) {
        let id = req.params.id;
        Usuario.findById(id, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(201).json(data);
            }
        });
    }

    actualizarUsuarios(req, res){
        // let {id, nombre, apellido} = req.body;
        let id = req.params.id;
        Usuario.findByIdAndUpdate(id, req.body, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(201).json(data);
            }
        });
    }

    eliminarUsuarios(req, res){
        let {id} = req.body;
        if(id){
            Usuario.findByIdAndRemove(id, (error, data)=>{
                if(error){
                    res.status(500).send();
                }else{
                    res.status(201).json(data);
                }
            });
        }else{
            res.status(400).send();
        }   
    }

    buscarPorApellido(req, res){
        let apellido = req.params.apellido;
        Usuario.find({apellido}, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(201).json(data);
            }
        }); 
    }

    generarToken(req, res){
        let token = jwt.sign({ nombre: 'Samuel' }, 'sapo');
        res.status(200).json({token});
    }
}

module.exports = usuarioControler;

