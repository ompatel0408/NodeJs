const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const ExamUserSchema = new Schema({
    
    Name: {
        type: String,
        required: true,
        trim: true,
    },
    exam:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Exam',
    }],
    role:{
        type:Schema.Types.ObjectId,
        ref:'Role',
    }
})

module.exports= mongoose.model('ExamUser', ExamUserSchema);