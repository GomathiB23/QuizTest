const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: String,
  url: String,
});

const questionSchema = new mongoose.Schema({
  text: String,
  options: [optionSchema],
  type: String,
  timer: Number,
});

const quizSchema = new mongoose.Schema({
  questions: [questionSchema],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
