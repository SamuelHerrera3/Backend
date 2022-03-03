const Product = require ('../models/product');
const jwt = require('jsonwebtoken');
const { PRIVATE_KEY, tokenController } = require('./tokenController');

class productController{
    constructor(){
        this.objTokenC = new tokenController();
    }

    //Properties Initializer
    create = (req, res)=>{
        
        let { name, price} = req.body;
        let decode = jwt.decode(this.objTokenC.getToken(req), PRIVATE_KEY);
        // Insertar/Crear el producto en la base de datos
        Product.create({name, price, user_id: decode.id}, (error, data)=>{
            if(error){
                res.status(500).json({info: "Error"})
            }else{
                res.status(201).json(data);
            }
        }  );
    }

    get = (req, res)=>{
        let decode = jwt.decode(this.objTokenC.getToken(req), PRIVATE_KEY);
        Product.find({user_id: decode.id}, (error, data)=>{
                if(error){
                    res.status(500).json({info: "Error"})
                }else{
                    res.status(201).json(data);
                }
            });
    }

    update = (req, res) =>{
        
        let decode = jwt.decode(this.objTokenC.getToken(req), PRIVATE_KEY);
        Product.findByIdAndUpdate({user_id: decode.id, name: decode.name}, req.body, (error, data)=>{
                if(error){
                    res.status(500).json({info: "Error"})
                }else{
                    res.status(201).json(data);
                }
            });
    }
}


module.exports = productController; 