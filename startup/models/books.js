const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  ISBN: Number,
  author: String,
  theme: [],
  interest: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  post: [{ type: Schema.Types.ObjectId, ref: 'User' }],

  //image

  publisher: {
    type: Schema.Types.ObjectId,
    ref: 'Publisher',
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
