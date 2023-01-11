const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({

    Exam:{
        type:Schema.Types.ObjectId,
        ref: 'Exam'    
    },
    question:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    A:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    B:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    C:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    D:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    answer:{
        type:Schema.Types.ObjectId,
        ref: 'Answer',
    }
})

module.exports= mongoose.model('Question1',QuestionSchema);