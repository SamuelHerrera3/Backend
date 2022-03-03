const mongoose = require('mongoose');
const { local_db } = require('./urlDb');

class ConnDB{

    constructor(){
        this.connection();
    }

    async connection(){
        this.conn = await mongoose.connect(local_db);
        
    }
}

module.exports = ConnDB;