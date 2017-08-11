const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  questiontitle: {
    type: String,
    required: [true, 'Please enter a question!'],
    trim: true,
  },
  desc:{
    type:String,
    trim: true,
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  answers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Answer'
    }
  ],
}, {
  timestamps: true
});

module.exports = mongoose.model('Question',questionSchema);

/**
 *
 * _id:string;
 question: string;
 desc:string;
 user: User;
 answers:[Answer];
 */
