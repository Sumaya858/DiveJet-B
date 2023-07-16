const mongoose = require('mongoose');


const FeedbackSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  feedback: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const feedback = mongoose.model('Feedback', FeedbackSchema);
module.exports= feedback