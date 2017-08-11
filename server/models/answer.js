const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema({
  answertitle: {
    type: String,
    required: [true, 'Answer is required'],
    trim: true,
  },
  sdetails:{
    type:String,
    trim: true,
  },
  like:{
    type:Number,
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  question:{
    type:Schema.Types.ObjectId,
    ref:'Question'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Answer',answerSchema);


/**
 * class Answer{
 _id:string;
 answer: string;
 sdetails:string;
 like:number;
 user: User;
 question:Question;
}
 */
