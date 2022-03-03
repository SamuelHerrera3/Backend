//Importar dependencias
const jwt = require("jsonwebtoken");
//Importar modulos
const User = require("../models/user");
const {PRIVATE_KEY} = require('./tokenController');


class userController {
    register(req, res) {
        let objUser = req.body;
        if (objUser.name && objUser.lastname && objUser.email && objUser.password) {
            User.create(objUser, (error, data) => {
                if (error) {
                    res.status(500).json({ error });
                } else {
                    //Generar/crear token
                    let token = jwt.sign({ id: data._id, email: data.email }, PRIVATE_KEY);
                    res.status(201).json({ token });
                }
            });
        } else {
            res.status(400).json({ info: "Datos incompletos" });
        }
    }

    // decode(req, res){
    //     let{token} = req.body;
    //     jwt.verify(token, 'sapo_33', (error, dec) =>{
    //         console.log(dec);
    //         res.status(200).send();
    //     });
    // }

    login(req, res){
        //capturar datos del cuerpo de la peticion
        let {email, password} = req.body;
        User.findOne({email, password}, (error, data)=>{
            if(error){
                res.status(500).json({error})
            }else{
                if(data != null && data != undefined){
                    //Generar/crear token
                    let token = jwt.sign({ id: data._id, email: data.email }, PRIVATE_KEY );
                    res.status(200).json({ token });
                }else{
                    res.status(401).json({info: 'Credenciales invalidas'});
                }
            }
        });
    }
}
module.exports = userController;
