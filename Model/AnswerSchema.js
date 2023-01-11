const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
    answer: {
        type: String,
        required: true,
    },
    Explanation: {
        type: String,
        required: true,
        trim: true,
    }
})

module.exports= mongoose.model('Answer', answerSchema);