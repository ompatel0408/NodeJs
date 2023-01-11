const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const testSchema= new Schema({

    FirstName:{
        type: String,
    },
    LastName:{
        type: String,
    },
    Email:{
        type: String,
    },
    Age:{
        type: Number,
    },
    Gender:{
        type: String,
    },
    isActive:{
        type: Boolean,
    }
})

module.exports= mongoose.model('Test',testSchema);
