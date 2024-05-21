// Score.js

import React from 'react';
import './Score.css'; // Assuming you have a CSS file for styling

const Score = ({ 
  score, 
  setScore, 
  setCurrentQuestion, 
  setQuizStarted, 
  setIsLastq, 
  setTimer 
}) => {
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizStarted(true);
    setIsLastq(false);
    setTimer(10);
  };

  return (
    <div className="score-container">
      <div className="card-body">
        <h2 className="card-title">Quiz Completed!</h2>
        <h4 className="card-text">Your score: {score}</h4>
        <button 
          className="btn btn-primary" 
          onClick={handleRestart}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default Score;
