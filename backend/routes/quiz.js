const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz1'); // Import the Quiz model

// Route to create a new quiz
router.post('/', async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).send(quiz);
  } catch (error) {
    res.status(400).send({ message: 'Error creating quiz', error });
  }
});

// Route to get a quiz by ID
router.get('/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).send({ message: 'Quiz not found' });
    }
    res.send(quiz);
  } catch (error) {
    res.status(400).send({ message: 'Error fetching quiz', error });
  }
});

module.exports = router;
