const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({

    departmentName:{
        type:String,
        unique: true,
        required:true,
        trim:true,
    },
    location:{
        type:String,
        required:true,
        trim:true,
    },
    Employees:[
        {
            type:Schema.Types.ObjectId,
            ref:'Employee'
        }
    ]
})

module.exports=mongoose.model('Department', departmentSchema);