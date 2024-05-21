// Questions.js

import React, { useState } from 'react';
import './Questions.css'; // Assuming you have a CSS file for styling

const Questions = ({ 
  questions, 
  handleNextQuestion, 
  currentQuestion, 
  handleAnswerClick, 
  timer, 
  isLastq 
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleAnswerClick(option);
  };

  return (
    <div className="quiz-container">
      <div className="question-header">
        <div className="question-number">
          {String(currentQuestion + 1).padStart(2, '0')}/{String(questions.length).padStart(2, '0')}
        </div>
        <div className="timer">
          {timer}s
        </div>
      </div>
      <div className="question-text">
        {questions[currentQuestion].question}
      </div>
      <div className="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button 
        className="next-button" 
        onClick={handleNextQuestion}
      >
        {isLastq ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default Questions;
