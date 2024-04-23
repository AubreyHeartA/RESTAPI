const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const PersonalTaskSchema = new Schema({
        title: {
            type: String,
            require: true
        },

        description: {
            type: String,
            require: true
        },

        status: {
            type: String,
            require: true
        },

        deadline: {
            type: Date,
            require: true
        },

        createdAt: {
            type: String,
            require: true
        },

        category: {
            type: String,
            require: true
        }
    });

    const PersonalTask = mongoose.model('personaltask', PersonalTaskSchema);
    module.exports = PersonalTask;