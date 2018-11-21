const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  // image:
  title: String,
  description: String,
  ISBN: Number,
  author: String,
  publisher: 'String',
  interest: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  post: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

bookSchema.plugin(mongoosePaginate);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
