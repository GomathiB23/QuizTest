import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Analytics.css'; // Ensure this file exists or adjust the path accordingly

const Analytics = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/quizzes');
      setQuizzes(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Quiz Analysis</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Quiz Name</th>
            <th>Created on</th>
            <th>Impression</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz, index) => (
            <tr key={quiz._id}>
              <td>{index + 1}</td>
              <td>{quiz.name}</td>
              <td>{new Date(quiz.createdAt).toLocaleDateString()}</td>
              <td>{quiz.impressions}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
                <button>Share</button>
                <button>Question Wise Analysis</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Analytics;
