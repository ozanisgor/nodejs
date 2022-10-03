const { Schema, default: mongoose } = require('mongoose');

const bookSchema = new Schema({
  title: String,
  author: String
});

module.exports = mongoose.model('Book', bookSchema);
