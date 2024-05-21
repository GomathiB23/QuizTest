const Quiz = require('../models/Quiz1.js');

const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().sort({ createdAt: -1 });
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createQuiz = async (req, res) => {
  const { title, questionsCount } = req.body;
  
  const newQuiz = new Quiz({
    title,
    questionsCount,
  });

  try {
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getQuizzes, createQuiz };
