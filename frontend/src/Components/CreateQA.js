// import React, { useState } from 'react';
// import './CreateQA.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function CreateQA() {
//   const [questions, setQuestions] = useState([
//     { text: '', options: [{ text: '' }], type: 'text', timer: null }
//   ]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLinkCopied, setIsLinkCopied] = useState(false);
//   const [timer, setTimer] = useState(null); // State for timer
//   const navigate = useNavigate();

//   const addOption = () => {
//     const newQuestions = [...questions];
//     if (newQuestions[currentQuestion].options.length < 4) {
//       newQuestions[currentQuestion].options = [...(newQuestions[currentQuestion].options || []), { text: '', url: '' }];
//       setQuestions(newQuestions);
//     }
//   };

//   const removeOption = (index) => {
//     const newQuestions = [...questions];
//     newQuestions[currentQuestion].options.splice(index, 1);
//     setQuestions(newQuestions);
//   };

//   const handleOptionChange = (e, index) => {
//     const newQuestions = [...questions];
//     newQuestions[currentQuestion].options[index].text = e.target.value;
//     setQuestions(newQuestions);
//   };

//   const handleQuestionChange = (e) => {
//     const newQuestions = [...questions];
//     newQuestions[currentQuestion].text = e.target.value;
//     setQuestions(newQuestions);
//   };

//   const handleOptionTypeChange = (e) => {
//     const newQuestions = [...questions];
//     newQuestions[currentQuestion].type = e.target.value;
//     newQuestions[currentQuestion].options = [{ text: '', url: '' }]; // Reset options when option type changes
//     setQuestions(newQuestions);
//   };

//   const addQuestion = () => {
//     setQuestions([...questions, { text: '', options: [{ text: '', url: '' }], type: 'text' }]);
//     setCurrentQuestion(questions.length);
//   };

//   const removeQuestion = () => {
//     const newQuestions = [...questions];
//     newQuestions.splice(currentQuestion, 1);
//     setQuestions(newQuestions);
//     setCurrentQuestion(Math.max(0, currentQuestion - 1));
//   };

//   // const handleCreateQuiz = async ()  => {
//   //   try {
//   //     const response = await axios.post('http://localhost:8080/api/quiz', { questions });
//   //     if (response.status === 201) {
//   //       setIsModalOpen(true);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error creating quiz:', error);
//   //   }
//   // };

//   const handleCreateQuiz = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/quiz', { data });
      
//       if (response.status === 201) {
//         setIsModalOpen(true);
//       } else {
//         throw new Error('Failed to create quiz. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error creating quiz:', error);
//       // Show frontend error notification
//     }
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

//   // Timer button handlers
//   const handleTimerOff = () => {
//     setTimer(null);
//   };

//   const handleTimer5Sec = () => {
//     setTimer(5);
//   };

//   const handleTimer10Sec = () => {
//     setTimer(10);
//   };

//   const handleOptionSelection = (index) => {
//     // Logic to handle option selection
//     // Set the selected option index in state or perform any other action as needed
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
//             <input
//               type="radio"
//               name="option-type"
//               value="text"
//               defaultChecked={questions[currentQuestion].type === 'text'}
//               onChange={handleOptionTypeChange}
//             />{" "}
//             Text
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="option-type"
//               value="image-url"
//               defaultChecked={questions[currentQuestion].type === 'image-url'}
//               onChange={handleOptionTypeChange}
//             />{" "}
//             Image URL
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="option-type"
//               value="text-image-url"
//               defaultChecked={questions[currentQuestion].type === 'text-image-url'}
//               onChange={handleOptionTypeChange}
//             />{" "}
//             Text & Image URL
//           </label>
//         </div>
//         <div className="options">
//           {questions[currentQuestion].options.map((option, index) => (
//             <div key={index} className="option">
//               {questions[currentQuestion].type === 'text' && (
//                 <input
//                   type="text"
//                   value={option.text}
//                   onChange={(e) => handleOptionChange(e, index, 'text')}
//                 />
//               )}
//               {questions[currentQuestion].type === 'image-url' && (
//                 <input
//                   type="url"
//                   value={option.url}
//                   onChange={(e) => handleOptionChange(e, index, 'url')}
//                 />
//               )}
//               {questions[currentQuestion].type === 'text-image-url' && (
//                 <>
//                   <input
//                     type="text"
//                     value={option.text}
//                     onChange={(e) => handleOptionChange(e, index, 'text')}
//                     placeholder="Text"
//                   />
//                   <input
//                     type="url"
//                     value={option.url}
//                     onChange={(e) => handleOptionChange(e, index, 'url')}
//                     placeholder="Image URL"
//                   />
//                 </>
//               )}
//               <input
//                 type="radio"
//                 name={`answer-${currentQuestion}`}
//                 value={index}
//                 onChange={() => handleOptionSelection(index)}
//               />
//               <span className="remove-option" onClick={() => removeOption(index)}>
//                 &#128465;
//               </span>
//             </div>
//           ))}
//           {questions[currentQuestion].options.length < 4 && (
//             <button className="add-option" onClick={addOption}>
//               Add option
//             </button>
//           )}
//         </div>
//         <div className="timer">
//           <label>Timer</label>
//           <button className={timer === null ? 'active' : ''} onClick={handleTimerOff}>OFF</button>
//           <button className={timer === 5 ? 'active' : ''} onClick={handleTimer5Sec}>5 sec</button>
//           <button className={timer === 10 ? 'active' : ''} onClick={handleTimer10Sec}>10 sec</button>
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
import axios from 'axios';

function CreateQA() {
  const [questions, setQuestions] = useState([
    { text: '', options: [{ text: '' }], type: 'text', timer: null }
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [timer, setTimer] = useState(null); // State for timer
  const navigate = useNavigate();

  const addOption = () => {
    const newQuestions = [...questions];
    if (newQuestions[currentQuestion].options.length < 4) {
      newQuestions[currentQuestion].options = [...(newQuestions[currentQuestion].options || []), { text: '' }];
      setQuestions(newQuestions);
    }
  };

  const removeOption = (index) => {
    const newQuestions = [...questions];
    newQuestions[currentQuestion].options.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleOptionChange = (e, index) => {
    const newQuestions = [...questions];
    newQuestions[currentQuestion].options[index].text = e.target.value;
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (e) => {
    const newQuestions = [...questions];
    newQuestions[currentQuestion].text = e.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionTypeChange = (e) => {
    const newQuestions = [...questions];
    newQuestions[currentQuestion].type = e.target.value;
    newQuestions[currentQuestion].options = [{ text: '' }]; // Reset options when option type changes
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { text: '', options: [{ text: '' }], type: 'text' }]);
    setCurrentQuestion(questions.length);
  };

  const removeQuestion = () => {
    const newQuestions = [...questions];
    newQuestions.splice(currentQuestion, 1);
    setQuestions(newQuestions);
    setCurrentQuestion(Math.max(0, currentQuestion - 1));
  };

  // const handleCreateQuiz = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/quiz', { questions });
  
  //     if (response.status === 201) {
  //       console.log(`Quiz successfully created and stored in the database:`, response.data);
  //       setIsModalOpen(true);
  //     } else {
  //       console.log('Failed to create quiz. Response status:', response.status);
  //       throw new Error('Failed to create quiz. Please try again later.');
  //     }
  //   } catch (error) {
  //     console.error('Error creating quiz:', error);
  //     // Show frontend error notification
  //   }
  // };

  const handleCreateQuiz = async () => {
    try {
      const quizData = {
        questions: questions.map((question) => ({
          text: question.text,
          options: question.options.map((option) => ({ text: option.text, correct: option.correct })),
          type: question.type,
          timer: question.timer,
        })),
      };

      const response = await axios.post('http://localhost:8080/api/quiz', quizData);

      if (response.status === 201) {
        console.log(`Quiz successfully created and stored in the database:`, response.data);
        setIsModalOpen(true);
      } else {
        console.log('Failed to create quiz. Response status:', response.status);
        throw new Error('Failed to create quiz. Please try again later.');
      }
    } catch (error) {
      console.error('Error creating quiz:', error);
      // Show frontend error notification
    }
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

  // Timer button handlers
  const handleTimerOff = () => {
    setTimer(null);
  };

  const handleTimer5Sec = () => {
    setTimer(5);
  };

  const handleTimer10Sec = () => {
    setTimer(10);
  };

  const handleOptionSelection = (index) => {
    // Logic to handle option selection
    // Set the selected option index in state or perform any other action as needed
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
            <input
              type="radio"
              name="option-type"
              value="text"
              defaultChecked={questions[currentQuestion].type === 'text'}
              onChange={handleOptionTypeChange}
            />{" "}
            Text
          </label>
          <label>
            <input
              type="radio"
              name="option-type"
              value="image-url"
              defaultChecked={questions[currentQuestion].type === 'image-url'}
              onChange={handleOptionTypeChange}
            />{" "}
            Image URL
          </label>
          <label>
            <input
              type="radio"
              name="option-type"
              value="text-image-url"
              defaultChecked={questions[currentQuestion].type === 'text-image-url'}
              onChange={handleOptionTypeChange}
            />{" "}
            Text & Image URL
          </label>
        </div>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="option">
              {questions[currentQuestion].type === 'text' && (
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => handleOptionChange(e, index)}
                />
              )}
              {questions[currentQuestion].type === 'image-url' && (
                <input
                  type="url"
                  value={option.url}
                  onChange={(e) => handleOptionChange(e, index)}
                />
              )}
              {questions[currentQuestion].type === 'text-image-url' && (
                <>
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) => handleOptionChange(e, index)}
                    placeholder="Text"
                  />
                  <input
                    type="url"
                    value={option.url}
                    onChange={(e) => handleOptionChange(e, index)}
                    placeholder="Image URL"
                  />
                </>
              )}
              <input
                type="radio"
                name={`answer-${currentQuestion}`}
                value={index}
                onChange={() => handleOptionSelection(index)}
              />
              <span className="remove-option" onClick={() => removeOption(index)}>
                &#128465;
              </span>
            </div>
          ))}
          {questions[currentQuestion].options.length < 4 && (
            <button className="add-option" onClick={addOption}>
              Add option
            </button>
          )}
        </div>
        <div className="timer">
          <label>Timer</label>
          <button className={timer === null ? 'active' : ''} onClick={handleTimerOff}>OFF</button>
          <button className={timer === 5 ? 'active' : ''} onClick={handleTimer5Sec}>5 sec</button>
          <button className={timer === 10 ? 'active' : ''} onClick={handleTimer10Sec}>10 sec</button>
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
