const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        username: {
            type: String,
            require: true
        },

        password: {
            type: String,
            require: true
        }
    });

const User = mongoose.model('prof', UserSchema);
module.exports = User;