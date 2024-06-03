// const express = require('express');
// const router = express.Router();
// const Quiz = require('../models/Quiz1'); // Import the Quiz model

// // Route to create a new quiz
// router.post('/', async (req, res) => {
//   try {
//     const quiz = new Quiz(req.body);
//     const createdQuiz = await quiz.save();
//     res.status(201).send({ message: 'Quiz created successfully', quiz: createdQuiz });
//   } catch (error) {
//     console.error(error); // Log the error for debugging purposes
//     res.status(400).send({ message: 'Error creating quiz' });
//   }
// });

// // Route to get all quizzes
// router.get('/', async (req, res) => {
//   try {
//     const quizzes = await Quiz.find().exec(); // Use.exec() to return a promise
//     res.send({ message: 'Quizzes fetched successfully', quizzes });
//   } catch (error) {
//     console.error(error); // Log the error for debugging purposes
//     res.status(400).send({ message: 'Error fetching quizzes' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz1');

// Route to create a new quiz
router.post('/', async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    const createdQuiz = await quiz.save();
    res.status(201).send({ message: 'Quiz created successfully', quiz: createdQuiz });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(400).send({ message: 'Error creating quiz' });
  }
});


// Get all quizzes
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a quiz by ID
router.get('/:id', async (req, res) => {
  try {
    const quizId = req.params.id;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).send({ message: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get the latest quiz

// Get the latest quiz
router.get('/latest', async (req, res) => {
  try {
    const latestQuiz = await Quiz.findOne().sort({ createdAt: -1 }); // Sort by createdAt in descending order
    if (!latestQuiz) {
      return res.status(404).send({ message: 'No quizzes found' });
    }
    res.json(latestQuiz);
  } catch (err) {
    res.status(500).send(err);
  }
});
// Add more routes as needed

module.exports = router;