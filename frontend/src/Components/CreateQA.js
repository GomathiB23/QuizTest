// import React, { useState } from 'react';
// import './CreateQA.css';
// import { useNavigate } from 'react-router-dom';

// function CreateQA() {
//   const [questions, setQuestions] = useState([{ text: '', options: [''] }]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLinkCopied, setIsLinkCopied] = useState(false);
//   const navigate = useNavigate();

//   const addOption = () => {
//     const newQuestions = [...questions];
//     newQuestions[currentQuestion].options = [...(newQuestions[currentQuestion].options || []), ''];
//     setQuestions(newQuestions);
//   };

//   const removeOption = (index) => {
//     const newQuestions = [...questions];
//     newQuestions[currentQuestion].options.splice(index, 1);
//     setQuestions(newQuestions);
//   };

//   const handleOptionChange = (e, index) => {
//     const newQuestions = [...questions];
//     newQuestions[currentQuestion].options[index] = e.target.value;
//     setQuestions(newQuestions);
//   };

//   const handleQuestionChange = (e) => {
//     const newQuestions = [...questions];
//     newQuestions[currentQuestion].text = e.target.value;
//     setQuestions(newQuestions);
//   };

//   const addQuestion = () => {
//     setQuestions([...questions, { text: '', options: [''] }]);
//     setCurrentQuestion(questions.length);
//   };

//   const removeQuestion = () => {
//     const newQuestions = [...questions];
//     newQuestions.splice(currentQuestion, 1);
//     setQuestions(newQuestions);
//     setCurrentQuestion(Math.max(0, currentQuestion - 1));
//   };

//   const handleCreateQuiz = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setIsLinkCopied(false);
//   };

//   const handleCopyLink = () => {
//     const link = `${window.location.origin}/quiz`;
//     navigator.clipboard.writeText(link).then(() => {
//       setIsLinkCopied(true);
//     });
//   };

//   const handleRedirectToQuiz = () => {
//     navigate('/quiz');
//   };

//   return (
//     <div className="create-quiz-container">
//       <div className="quiz-header">
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className={`question-tab ${index === currentQuestion ? 'active' : ''}`}
//             onClick={() => setCurrentQuestion(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//         {questions.length < 5 && (
//           <button className="add-question-tab" onClick={addQuestion}>
//             +
//           </button>
//         )}
//         {questions.length > 1 && (
//           <button className="remove-question-tab" onClick={removeQuestion}>
//             &times;
//           </button>
//         )}
//       </div>
//       <div className="quiz-body">
//         <input
//           type="text"
//           className="poll-question"
//           placeholder="Poll Question"
//           value={questions[currentQuestion].text}
//           onChange={handleQuestionChange}
//         />
//         <div className="option-type">
//           <label>
//             <input type="radio" name="option-type" value="text" defaultChecked /> Text
//           </label>
//           <label>
//             <input type="radio" name="option-type" value="image-url" /> Image URL
//           </label>
//           <label>
//             <input type="radio" name="option-type" value="text-image-url" /> Text & Image URL
//           </label>
//         </div>
//         <div className="options">
//           {questions[currentQuestion].options.map((option, index) => (
//             <div key={index} className="option">
//               <input
//                 type="text"
//                 value={option}
//                 onChange={(e) => handleOptionChange(e, index)}
//               />
//               <button className="delete-option" onClick={() => removeOption(index)}>
//                 &#128465;
//               </button>
//             </div>
//           ))}
//           <button className="add-option" onClick={addOption}>Add option</button>
//         </div>
//         <div className="timer">
//           <label>Timer</label>
//           <button>OFF</button>
//           <button>5 sec</button>
//           <button className="active">10 sec</button>
//         </div>
//       </div>
//       <div className="quiz-footer">
//         <button className="cancel-button">Cancel</button>
//         <button className="create-quiz-button" onClick={handleCreateQuiz}>Create Quiz</button>
//       </div>
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <button className="close-modal" onClick={handleCloseModal}>&times;</button>
//             <h2>Congrats your Quiz is Published!</h2>
//             <input type="text" readOnly value={`${window.location.origin}/quiz`} />
//             <button className="share-button" onClick={handleCopyLink}>Share</button>
//             <button className="redirect-button" onClick={handleRedirectToQuiz}>Go to Quiz</button>
//             {isLinkCopied && (
//               <div className="link-copied-notification">
//                 <span>Link copied to Clipboard</span>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CreateQA;


import React, { useState } from 'react';
import './CreateQA.css';
import { useNavigate } from 'react-router-dom';

function CreateQA() {
  const [questions, setQuestions] = useState([{ text: '', options: [''] }]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const navigate = useNavigate();

  const addOption = () => {
    const newQuestions = [...questions];
    newQuestions[currentQuestion].options = [...(newQuestions[currentQuestion].options || []), ''];
    setQuestions(newQuestions);
  };

  const removeOption = (index) => {
    const newQuestions = [...questions];
    newQuestions[currentQuestion].options.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleOptionChange = (e, index) => {
    const newQuestions = [...questions];
    newQuestions[currentQuestion].options[index] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (e) => {
    const newQuestions = [...questions];
    newQuestions[currentQuestion].text = e.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { text: '', options: [''] }]);
    setCurrentQuestion(questions.length);
  };

  const removeQuestion = () => {
    const newQuestions = [...questions];
    newQuestions.splice(currentQuestion, 1);
    setQuestions(newQuestions);
    setCurrentQuestion(Math.max(0, currentQuestion - 1));
  };

  const handleCreateQuiz = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLinkCopied(false);
  };

  const handleCopyLink = () => {
    const link = `${window.location.origin}/quiz`;
    navigator.clipboard.writeText(link).then(() => {
      setIsLinkCopied(true);
    });
  };

  const handleRedirectToQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="create-quiz-container">
      <div className="quiz-header">
        {questions.map((_, index) => (
          <button
            key={index}
            className={`question-tab ${index === currentQuestion ? 'active' : ''}`}
            onClick={() => setCurrentQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
        {questions.length < 5 && (
          <button className="add-question-tab" onClick={addQuestion}>
            +
          </button>
        )}
        {questions.length > 1 && (
          <button className="remove-question-tab" onClick={removeQuestion}>
            &times;
          </button>
        )}
      </div>
      <div className="quiz-body">
        <input
          type="text"
          className="poll-question"
          placeholder="Poll Question"
          value={questions[currentQuestion].text}
          onChange={handleQuestionChange}
        />
        <div className="option-type">
          <label>
            <input type="radio" name="option-type" value="text" defaultChecked /> Text
          </label>
          <label>
            <input type="radio" name="option-type" value="image-url" /> Image URL
          </label>
          <label>
            <input type="radio" name="option-type" value="text-image-url" /> Text & Image URL
          </label>
        </div>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="option">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(e, index)}
              />
              <button className="delete-option" onClick={() => removeOption(index)}>
                &#128465;
              </button>
            </div>
          ))}
          <button className="add-option" onClick={addOption}>Add option</button>
        </div>
        <div className="timer">
          <label>Timer</label>
          <button>OFF</button>
          <button>5 sec</button>
          <button className="active">10 sec</button>
        </div>
      </div>
      <div className="quiz-footer">
        <button className="cancel-button">Cancel</button>
        <button className="create-quiz-button" onClick={handleCreateQuiz}>Create Quiz</button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={handleCloseModal}>&times;</button>
            <h2>Congrats your Quiz is Published!</h2>
            <input type="text" readOnly value={`${window.location.origin}/quiz`} />
            <button className="share-button" onClick={handleCopyLink}>Share</button>
            <button className="redirect-button" onClick={handleRedirectToQuiz}>Go to Quiz</button>
            {isLinkCopied && (
              <div className="link-copied-notification">
                <span>Link copied to Clipboard</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateQA;

