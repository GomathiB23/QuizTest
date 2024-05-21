const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questionsCount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  impressions: { type: Number, default: 0 },
});

module.exports = mongoose.model('Quiz', quizSchema);
