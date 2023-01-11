const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playListSchema = new Schema({
    playListName: {
        type: String,
        required: true,
    },
    songs:[{
        type:Schema.Types.ObjectId,
        ref: 'Song',
    }]
})

module.exports = mongoose.model('playList', playListSchema);