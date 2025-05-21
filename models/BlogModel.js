const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogScema = new Schema({
    title: {
        type: String,
        required: [true, "Blog must have a title for its content"],
        trim: true
    },
    author: {
        type: String,
        required: [true, "Author must be defined"],
        trim: true
    },
    content: {
        type: String,
        required: [true, "Blog must have content"]
    },

})

const Blog = mongoose.model('Blog', blogScema);
module.exports = Blog;