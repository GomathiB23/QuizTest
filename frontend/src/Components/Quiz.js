import React, { useState, useEffect } from 'react';
import './Quiz.css';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(null); // State for timer
  const [timerRunning, setTimerRunning] = useState(false); // State to track timer running

  useEffect(() => {
    // Fetch quiz data from backend or local storage
    const fetchedQuestions = [
      {
        text: 'Your question text comes here, its a sample text.',
        options: [
          { text: 'Option 1', url: '' }, 
          { text: 'Option 1', url: '' }, 
          { text: 'Option 1', url: '' }, 
          { text: 'Option 1', url: '' }
        ],
        type: 'text',
        timer: 10 // Replace with actual timer value from backend
      },
      // Add more questions here
    ];
    setQuestions(fetchedQuestions);
  }, []);

  useEffect(() => {
    if (timerRunning) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timerRunning]);

  const handleOptionSelection = (index) => {
    setSelectedAnswers([...selectedAnswers, index]);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleStartTimer = () => {
    setTimerRunning(true);
  };

  // const handleReset = () => {
  //   setSelectedAnswers([]);
  //   setCurrentQuestion(0);
  //   setShowResults(false);
  //   setTimer(null);
  //   setTimerRunning(false);
  // };

  const calculateScore = () => {
    // Implement your scoring logic here
    // For example, you can compare selectedAnswers with correct answers
    // and calculate a percentage score
    let score = 0;
    // ... your scoring logic
    return score;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="quiz-container">
        <h2>Congrats Quiz is completed</h2>
        <p>Your score is {score}</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span className="question-number">Question {currentQuestion + 1} of {questions.length}</span>
        {timerRunning && <span className="timer">{timer}</span>}
      </div>
      <div className="question-text">{currentQuestionData.text}</div>
      <div className="options">
        {currentQuestionData.options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedAnswers.includes(index) ? 'selected' : ''}`}
            onClick={() => handleOptionSelection(index)}
          >
            {option.text}
            {/* Display image if option type is image-url */}
            {currentQuestionData.type === 'image-url' && (
              <img src={option.url} alt="Option Image" />
            )}
            {/* Display text and image if option type is text-image-url */}
            {currentQuestionData.type === 'text-image-url' && (
              <>
                <img src={option.url} alt="Option Image" />
                <span>{option.text}</span>
              </>
            )}
          </button>
        ))}
      </div>
      <div className="quiz-footer">
        {timerRunning && <button onClick={handleStartTimer}>Start Timer</button>}
        {currentQuestion < questions.length - 1 && (
          <button onClick={handleNextQuestion}>Next Question</button>
        )}
        {currentQuestion === questions.length - 1 && (
          <button onClick={() => setShowResults(true)}>Submit Quiz</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;