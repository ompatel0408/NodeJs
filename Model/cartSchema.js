const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({

    User:{
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }]
},{timestamps:true})

module.exports=mongoose.model('Cart',cartSchema);

