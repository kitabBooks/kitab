const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const statesArray = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ', 'RN', 'RS', 'SC', 'SP', 'SE', 'TO'];

const userSchema = new Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: String,
  address: {
    zip: Number,
    street: String,
    city: String,
    state: {
      type: String,
      uppercase: true,
      required: true,
      enum: statesArray,
    },
  },
  interest: [{ type: Schema.Types.ObjectId, ref: 'Book', { timestamps: { createdAt: 'created_at' }}}],
  post: [{ type: Schema.Types.ObjectId, ref: 'Book', { timestamps: { createdAt: 'created_at' }}}],
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
