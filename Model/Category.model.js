const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const CategorySchema = new Schema({
        categoryName: {
            type: String,
            require: true
        }
    });

    const Category = mongoose.model('category', CategorySchema);
    module.exports = Category;