const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/quizAnalytics', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Quiz Schema and Model
const quizSchema = new mongoose.Schema({
  name: String,
  createdAt: Date,
  impressions: String,
});

const Quiz = mongoose.model('Quiz', quizSchema);

// Seed Data (optional)
app.get('/seed', async (req, res) => {
  try {
    await Quiz.deleteMany({});
    await Quiz.insertMany([
      { name: 'Quiz 1', createdAt: new Date('2023-09-01'), impressions: '345' },
      { name: 'Quiz 2', createdAt: new Date('2023-09-04'), impressions: '667' },
      { name: 'Quiz 3', createdAt: new Date('2023-09-06'), impressions: '1.6K' },
      { name: 'Quiz 4', createdAt: new Date('2023-09-09'), impressions: '789' },
      { name: 'Quiz 5', createdAt: new Date('2023-09-11'), impressions: '995' },
      { name: 'Quiz 6', createdAt: new Date('2023-09-13'), impressions: '2.5K' },
      { name: 'Quiz 7', createdAt: new Date('2023-09-14'), impressions: '231' },
      { name: 'Quiz 8', createdAt: new Date('2023-09-17'), impressions: '1.3K' },
    ]);
    res.send('Data seeded!');
  } catch (err) {
    res.status(500).send(err);
  }
});

// Routes
app.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
