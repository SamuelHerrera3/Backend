const {Schema, model} = require('mongoose');

// crear Schema
const productSchema = Schema({
    name:{
        type: String
    },
    price:{
        type: String
    },
    user_id: {
        type: String
    }
},{
    collection: 'products'
});

module.exports = model('Product', productSchema)