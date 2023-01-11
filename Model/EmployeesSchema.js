const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({

    Name:{
        type:String,
        required:true,
        trim:true,
    },
    department:[{
        type:Schema.Types.ObjectId,
        ref: 'Department'
    }]
})
module.exports=mongoose.model('Employee',EmployeeSchema);