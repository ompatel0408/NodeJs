const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const ExamSchema = new Schema({

    ExamName:{
        type:String,
        required:true,
        trim:true
    },
    ExamType:{
        type:String,
        required:true,
        trim:true
    },
    ExamId:{
        type:Number,
        required:true,
        trim:true
    },
    
})

module.exports = mongoose.model('Exam', ExamSchema);
