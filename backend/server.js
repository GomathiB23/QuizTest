
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connection = require('./db');
// const userRoutes = require('./routes/users');
// const authRoutes = require('./routes/auth');
// const quizRoutes = require('./routes/quiz'); // Import the quiz routes
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');


// const app = express();

// // Database connection
// connection();

// // Middlewares
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(cors());

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/quiz', quizRoutes); // Use the quiz routes

// const port = process.env.PORT || 8000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz'); // Import the quiz routes
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Database connection
connection();

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes); // Use the quiz routes

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));