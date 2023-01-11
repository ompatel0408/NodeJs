const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema=new Schema({

    songName:{
        type:String,
        required:true
    },
    artistName:{
        type:String,
        required:true
    },
    playList:{
        type:Schema.Types.ObjectId,
        ref:'PlayList'
    }
})

module.exports = mongoose.model('Song', songSchema);