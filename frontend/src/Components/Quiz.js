// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Quiz.css';

// function Quiz() {
  

//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const [timer, setTimer] = useState(null); // State for timer
//   const [timerRunning, setTimerRunning] = useState(false); // State to track timer running

//   // useEffect(() => {
//   //   // Fetch quiz data from backend or local storage
//   //   const fetchedQuestions = [
//   //     {
//   //       text: 'Your question text comes here, its a sample text.',
//   //       options: [
//   //         { text: 'Option 1', url: '' }, 
//   //         { text: 'Option 1', url: '' }, 
//   //         { text: 'Option 1', url: '' }, 
//   //         { text: 'Option 1', url: '' }
//   //       ],
//   //       type: 'text',
//   //       timer: 10 // Replace with actual timer value from backend
//   //     },
//   //     // Add more questions here
//   //   ];
//   //   setQuestions(fetchedQuestions);
//   // }, []);

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/quiz');
//         const data = await response.json(); // Convert response to JSON
//         if (data.length > 0) {
//           setQuestions(data[0].questions); // Assuming you want to load the first quiz
//           setTimer(data[0].questions[0]?.timer || null);
//         }  
//       } catch (error) {
//         console.error('Error fetching quiz:', error);
//       }
//     };
  
//     fetchQuiz(); // Call the fetchQuiz function
//   }, []);
  
//   useEffect(() => {
//     if (timerRunning && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer(prevTimer => prevTimer - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [timerRunning, timer]);

//   const handleOptionSelection = (index) => {
//     setSelectedAnswers([...selectedAnswers, index]);
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setTimer(questions[currentQuestion + 1].timer);
//       setTimerRunning(false);
//     } else {
//       setShowResults(true);
//     }
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//   };

//   const handleStartTimer = () => {
//     setTimerRunning(true);
//   };

//   // const handleReset = () => {
//   //   setSelectedAnswers([]);
//   //   setCurrentQuestion(0);
//   //   setShowResults(false);
//   //   setTimer(null);
//   //   setTimerRunning(false);
//   // };

//   const calculateScore = () => {
//     // Implement your scoring logic here
//     // For example, you can compare selectedAnswers with correct answers
//     // and calculate a percentage score
//     let score = 0;
//     // ... your scoring logic
//     return score;
//   };

//   if (showResults) {
//     const score = calculateScore();
//     return (
//       <div className="quiz-container">
//         <h2>Congrats Quiz is completed</h2>
//         <p>Your score is {score}</p>
//       </div>
//     );
//   }

//   if (questions.length === 0) {
//     return <div>Loading quiz...</div>;
//   }

//   const currentQuestionData = questions[currentQuestion];

//   return (
//     <div className="quiz-container">
//       <div className="quiz-header">
//         <span className="question-number">Question {currentQuestion + 1} of {questions.length}</span>
//         {timerRunning && <span className="timer">{timer}</span>}
//       </div>
//       <div className="question-text">{currentQuestionData.text}</div>
//       <div className="options">
//         {currentQuestionData.options.map((option, index) => (
//           <button
//             key={index}
//             className={`option ${selectedAnswers.includes(index) ? 'selected' : ''}`}
//             onClick={() => handleOptionSelection(index)}
//           >
//             {option.text}
//             {/* Display image if option type is image-url */}
//             {currentQuestionData.type === 'image-url' && (
//               <img src={option.url} alt="Option Image" />
//             )}
//             {/* Display text and image if option type is text-image-url */}
//             {currentQuestionData.type === 'text-image-url' && (
//               <>
//                 <img src={option.url} alt="Option Image" />
//                 <span>{option.text}</span>
//               </>
//             )}
//           </button>
//         ))}
//       </div>
//       <div className="quiz-footer">
//         {timerRunning && <button onClick={handleStartTimer}>Start Timer</button>}
//         {currentQuestion < questions.length - 1 && (
//           <button onClick={handleNextQuestion}>Next Question</button>
//         )}
//         {currentQuestion === questions.length - 1 && (
//           <button onClick={() => setShowResults(true)}>Submit Quiz</button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Quiz;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [showTimerButton, setShowTimerButton] = useState(true); 
  const navigate = useNavigate();
  
  const handleStartTimer = () => {
    setTimer(10); // Set the initial timer value (e.g., 10 seconds)
    setTimerRunning(true); // Start the timer
    setShowTimerButton(false); // Hide the timer button once the timer starts
  };



  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/quiz');
        const data = response.data;
        if (data.length > 0) {
          setQuestions(data[0].questions); // Assuming you want to load the first quiz
          setTimer(data[0].questions[0]?.timer || null);
        }
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();
  }, []);

  // useEffect(() => {
  //   if (timerRunning && timer > 0) {
  //     const interval = setInterval(() => {
  //       setTimer(prevTimer => prevTimer - 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }
  // }, [timerRunning, timer]);


  useEffect(() => {
    let interval;
  
    if (timerRunning && timer > 0) {
      // Start the timer
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1); // Decrease timer value every second
      }, 1000);
    } else if (timer === 0) {
      // Timer has reached 0, navigate to the next question
      console.log('Timer has reached 0');
      clearInterval(interval); // Stop the interval
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prevQuestion => prevQuestion + 1); // Move to the next question
      } else {
        // Quiz is over, navigate to the quiz result page or perform any other action
        console.log('Quiz is over!');
      }
    }
  
    // Cleanup interval on unmount or when current question changes
    return () => clearInterval(interval);
  }, [timerRunning, timer, currentQuestion]);

  const handleOptionSelection = (index) => {
    setSelectedAnswers([...selectedAnswers, index]);
    setTimerRunning(false); // Stop the timer when an option is selected
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(questions[currentQuestion + 1]?.timer || null);
      setTimerRunning(false);
    } else {
      setShowResults(true);
    }
  };

  // const handleStartTimer = () => {
  //   setTimerRunning(true);
  // };

  const calculateScore = (selectedAnswers, questions) => {
    let score = 0;
    selectedAnswers.forEach((answer, index) => {
      if (questions[index].correctOption.toString() === questions[index].options[answer]._id.toString()) {
        score++;
      }
    });
    return score;
  };
  // if (showResults) {
  //   const score = calculateScore(selectedAnswers, questions);
  //   return (
  //     <div className="quiz-container">
  //       <h2>Congrats, Quiz is completed!</h2>
  //       <p>Your score is {score} out of {questions.length}</p>
  //     </div>
  //   );
  // }
  if (questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  const currentQuestionData = questions[currentQuestion];

  const handleSubmitQuiz = () => {
    // Logic to handle quiz submission
    console.log('Quiz submitted!');
    navigate('/score')
  };


  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span className="question-number">Question {currentQuestion + 1} / {questions.length}</span>
        {timerRunning && <span className="timer">{timer}s</span>}
      </div>
      <div className="question-text">{currentQuestionData.text}</div>
      <div className="options">
        {currentQuestionData.options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
            onClick={() => handleOptionSelection(index)}
          >
            {option.text}
          </button>
        ))}
      </div>
      {/* <div className="quiz-footer">
        {!timerRunning && timer !== null && (
          <button onClick={handleStartTimer}>Start Timer</button>
        )}
        {timerRunning && currentQuestion < questions.length - 1 && (
          <button onClick={handleNextQuestion}>Next Question</button>
        )}
        {currentQuestion === questions.length - 1 && (
          <button onClick={() => setShowResults(true)}>Submit Quiz</button>
        )}
      </div> */}

<div>
{showTimerButton && (
        <button className="bg-red-400" onClick={handleStartTimer}>Start Timer</button>
      )}
      {/* Render the timer value */}
      {/* {timer !== null && <p>Timer: {timer}s</p>} */}

        {/* Render "Next Question" button if not on the last question */}
        {currentQuestion < questions.length - 1 && (
          <button onClick={handleNextQuestion}>Next Question</button>
        )}
        {/* Render "Submit Quiz" button on the last question */}
        {currentQuestion === questions.length - 1 && (
          <button onClick={handleSubmitQuiz}>Submit Quiz</button>
        )}
      </div>
    </div>                       
  );
}

export default Quiz;
