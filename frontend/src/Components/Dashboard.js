import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
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

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/quizzes');
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes', error);
      }
    };

    fetchQuizzes();
  }, []);

  const totalQuizzes = quizzes.length;
  const totalQuestions = quizzes.reduce((acc, quiz) => acc + quiz.questionsCount, 0);
  const totalImpressions = quizzes.reduce((acc, quiz) => acc + quiz.impressions, 0);

  return (
    <div className="dashboard">
      <div className="stats">
        <div className="stat">
          <span>{totalQuizzes}</span>
          <p>Quiz Created</p>
        </div>
        <div className="stat">
          <span>{totalQuestions}</span>
          <p>questions Created</p>
        </div>
        <div className="stat">
          <span>{(totalImpressions / 1000).toFixed(1)}K</span>
          <p>Total Impressions</p>
        </div>
      </div>
      <div className="trending-quizzes">
        <h2>Trending Quizzes</h2>
        <div className="quizzes-list">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz._id} quiz={quiz} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
