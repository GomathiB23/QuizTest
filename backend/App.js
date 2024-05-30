// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/DB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Middleware
// app.use(bodyParser.json());

// // Define a simple schema and model
// const Schema = mongoose.Schema;
// const ItemSchema = new Schema({
//   name: String,
//   quantity: Number
// });

// const Item = mongoose.model('Item', ItemSchema);

// // Routes
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/items', async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.json(items);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.post('/items', async (req, res) => {
//   try {
//     const newItem = new Item(req.body);
//     const savedItem = await newItem.save();
//     res.status(201).json(savedItem);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Quizzie', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());

// Define a simple schema and model
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  name: String,
  quantity: Number
});

const Item = mongoose.model('Item', ItemSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/api/quiz', async (req, res) => {
  try {
    req.body.timer = req.body.timer || 0; // Set a default value of 0 if timer is not provided
    const newQuiz = new Quiz(req.body);
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (error) {
    res.status(400).send(error);
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));