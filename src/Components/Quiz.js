// import React, { useState, useEffect } from 'react';
// import Questions from './QuestionBank';
// import Score from './Score';
// import questions from './Questions';
// import '../Styles/Quiz.css'; // Assuming you have some global styles
import React, { useState, useEffect, useCallback } from 'react';
import Questions from './QuestionBank';
import Score from './Score';
import questions from './Questions';
// Assuming you have some global styles

// ... rest of the code remains the same
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(true);
  const [isLastq, setIsLastq] = useState(false);
  const [timer, setTimer] = useState(10);

  const handleNextQuestion = useCallback(() => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setIsLastq(nextQuestion === questions.length - 1);
      setTimer(10);
    } else {
      setQuizStarted(false);
    }
  }, [currentQuestion, setCurrentQuestion, setIsLastq, setTimer, setQuizStarted]);

  useEffect(() => {
    let timerInterval;
    if (quizStarted && timer > 0) {
      timerInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      handleNextQuestion();
    }
    return () => clearInterval(timerInterval);
  }, [quizStarted, timer, handleNextQuestion]);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  return (
    <div className="quiz">
      {quizStarted ? (
        <Questions 
          questions={questions}
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
          handleAnswerClick={handleAnswerClick}
          timer={timer}
          isLastq={isLastq}
        />
      ) : (
        <Score 
          score={score}
          setScore={setScore}
          setCurrentQuestion={setCurrentQuestion}
          setQuizStarted={setQuizStarted}
          setIsLastq={setIsLastq}
          setTimer={setTimer}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
};

export default Quiz;