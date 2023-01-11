const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
    role: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Role', rolesSchema);
