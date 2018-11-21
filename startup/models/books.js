const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  // image:
  title: String,
  description: String,
  ISBN: Number,
  author: String,
  theme: [],
  interest: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  post: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  publisher: 'String',
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
