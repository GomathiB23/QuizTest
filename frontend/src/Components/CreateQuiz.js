// import React, { useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './CreateQuiz.css';

// const CreateQuiz = ({ handleClose }) => {
//   const popupRef = useRef(null);
//   const navigate = useNavigate(); // Using useNavigate hook

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         handleClose();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [handleClose]);

//   const handleContinue = () => {
//     handleClose();
//     navigate('/createqa'); // Navigate to /createqa route
//   };

//   return (
//     <>
//       <div className="popup" ref={popupRef}>
//         <div className="popup-content">
//           <input type="text" placeholder="Quiz name" className="input-style" />
//           <div className="quiz-type">
//             <p className="quiz-text">Quiz Type</p>
//             <button className="quiz-button">Q & A</button>
//             <button className="quiz-button1">Poll Type</button>
//           </div>
//           <div className="buttons">
//             <button className="cancel-button" onClick={handleClose}>Cancel</button>
//             {/* Replace the button with Link */}
//             <button className="continue-button" onClick={handleContinue}>Continue</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateQuiz;
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateQuiz.css';

const CreateQuiz = ({ handleClose }) => {
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const [quizName, setQuizName] = useState('');
  const [error, setError] = useState('');
  const [quizType, setQuizType] = useState('Q&A');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose]);

  const handleContinue = () => {
    if (!quizName) {
      setError('Quiz name is required');
    } else {
      setError('');
      handleClose();
      if (quizType === 'Q&A') {
        navigate('/createqa');
      } else if (quizType === 'Poll Type') {
        navigate('/createpoll');
      }
    }
  };

  const handleInputChange = (e) => {
    setQuizName(e.target.value);
  };

  const handleQuizTypeChange = (type) => {
    setQuizType(type);
  };

  return (
    <>
      <div className="popup" ref={popupRef}>
        <div className="popup-content">
          <input type="text" placeholder="Quiz name" className="input-style" value={quizName} onChange={handleInputChange} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="quiz-type">
            <p className="quiz-text">Quiz Type</p>
            <button className={`quiz-button ${quizType === 'Q&A' ? 'active' : ''}`} onClick={() => handleQuizTypeChange('Q&A')}>Q & A</button>
            <button className={`quiz-button1 ${quizType === 'Poll Type' ? 'active' : ''}`} onClick={() => handleQuizTypeChange('Poll Type')}>Poll Type</button>
          </div>
          <div className="buttons">
            <button className="cancel-button" onClick={handleClose}>Cancel</button>
            <button className="continue-button" onClick={handleContinue}>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuiz;
