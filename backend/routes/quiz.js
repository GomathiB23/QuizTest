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
const Quiz = require('../models/quiz');

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

// Add more routes as needed

module.exports = router;