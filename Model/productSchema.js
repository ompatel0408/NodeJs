const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

    productName:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        trim:true,
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Product',productSchema);