const {Schema, model} = require('mongoose');

// crear Schema
const userSchema = Schema({
    name:{
        type: String
    },
    lastname:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
},{
    collection: "users"
});

module.exports = model('user', userSchema)