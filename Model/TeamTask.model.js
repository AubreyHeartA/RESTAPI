const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const TeamTaskSchema = new Schema({
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
            type: Date,
            require: Date.now
        },

        category: {
            type: String,
            require: true
        },

        memberAssigned: {
            type: String,
            require: true
        }
    });

    const TeamTask = mongoose.model('teamtask', TeamTaskSchema);
    module.exports = TeamTask;