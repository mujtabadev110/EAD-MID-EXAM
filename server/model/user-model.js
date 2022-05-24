const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    
    name:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true,
    },

    phone:{
        type: 'number',
        required: true,
    },
    country:{
        type: 'string',
        required: true,
    },
    state:{
        type: 'string',
        required: true,
    },
    city:{
        type: 'string',
        required: true,
    },
    address:{
        type: 'string',
        required: true,
    },
    zip:{
        type: 'number',
        required: true,
    }
    
});



const UsersModel = mongoose.model('Users', UsersSchema);
module.exports = UsersModel;