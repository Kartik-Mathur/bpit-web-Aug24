const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
    name: String,
    description: String,
    completed: { type: Boolean, default: false }
})

module.exports = mongoose.model('Todo', todoSchema);