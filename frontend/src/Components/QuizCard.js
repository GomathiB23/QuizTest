import React from 'react';
import './QuizCard.css';

const QuizCard = ({ quiz }) => {
  return (
    <div className="quiz-card">
      <h3>{quiz.title}</h3>
      <div className="quiz-info">
        <span>{quiz.questionsCount} questions</span>
        <span>{quiz.impressions} impressions</span>
        <span>Created on: {new Date(quiz.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default QuizCard;
