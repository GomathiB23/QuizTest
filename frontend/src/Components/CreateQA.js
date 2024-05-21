import React, { useState } from 'react';
import './CreateQA.css';
import { useNavigate } from 'react-router-dom';

function CreateQA() {
  const [questions, setQuestions] = useState([{ text: '', options: [''], type: 'text' }]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [timer, setTimer] = useState(null); // State for timer
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

  const handleOptionTypeChange = (e) => {
    const newQuestions = [...questions];
    newQuestions[currentQuestion].type = e.target.value;
    newQuestions[currentQuestion].options = ['']; // Reset options when option type changes
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { text: '', options: [''], type: 'text' }]);
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
                value={option}
                onChange={(e) => handleOptionChange(e, index)}
              />
            )}
            {questions[currentQuestion].type === 'image-url' && (
              <input
                type="url"
                value={option}
                onChange={(e) => handleOptionChange(e, index)}
              />
            )}
            {questions[currentQuestion].type === 'text-image-url' && (
              <>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(e, index)}
                  placeholder="Text"
                />
                <input
                  type="url"
                  value={option}
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
        <button className="add-option" onClick={addOption}>
          Add option
        </button>
      </div>
      <div className="timer">
        <label>Timer</label>
        <button onClick={handleTimerOff}>OFF</button>
        <button onClick={handleTimer5Sec}>5 sec</button>
        <button onClick={handleTimer10Sec}>10 sec</button>
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


  
        <div className="timer">
          <label>Timer</label>
          <button className={timer === null ? 'active' : ''} onClick={handleTimerOff}>OFF</button>
          <button onClick={handleTimer5Sec}>5 sec</button>
          <button onClick={handleTimer10Sec}>10 sec</button>
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
