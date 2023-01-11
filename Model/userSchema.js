const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    },
    age:{
        type:Number,
    },
    isActive:{
        type:Boolean
    }
})

module.exports = mongoose.model('user',userSchema)