const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const ProfileSchema = new Schema({
        firstName: {
            type: String,
            require: true
        },

        lastName: {
            type: String,
            require: true
        },

        workEmail: {
            type: String, 
            require: true
        }
    });

const Profile = mongoose.model('user', ProfileSchema);
module.exports = Profile;