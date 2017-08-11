const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');
const validator = require('validator');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'User Name is required'],
    trim: true,
    unique: true,
  },
  }, {
  timestamps: true
});
module.exports = mongoose.model('User',userSchema);
