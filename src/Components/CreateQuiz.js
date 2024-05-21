
// import React, { useRef, useState, useEffect } from 'react';
// import CreateQA from './CreateQA';
// import '../Styles/CreateQuiz.css';

// // Rest of the code

// const CreateQuiz = ({ handleClose }) => {
//     const popupRef = useRef(null);
//     const [showCreateQuiz, setShowCreateQuiz] = useState(false);
//     const handleToggleCreateQuiz = () => {
//         setShowCreateQuiz(!showCreateQuiz);
//     };
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 handleClose();
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [handleClose]);

//     return (
//         <div className="popup" ref={popupRef}>
//             <div className="popup-content">
//                 <input type="text" placeholder="Quiz name" className='input-style'/>
//                 <div className="quiz-type">
//                     <p className='quiz-text'>Quiz Type</p>
//                     <button className='quiz-button' onClick={handleToggleCreateQuiz}>Q & A</button>
//                     {showCreateQuiz && <CreateQA />}
//                     <button className='quiz-button1'>Poll Type</button>
//                 </div>
//                 <div className="buttons">
//                     <button className="cancel-button" onClick={handleClose}>Cancel</button>
//                     <button className="continue-button">Continue</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CreateQuiz;

import React, { useRef, useEffect } from 'react';
import './CreateQuiz.css';


const CreateQuiz = ({ handleClose }) => {
  const popupRef = useRef(null);


 
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

  return (
    <>
      <div className="popup" ref={popupRef}>
        <div className="popup-content">
          <input type="text" placeholder="Quiz name" className="input-style" />
          <div className="quiz-type">
            <p className="quiz-text">Quiz Type</p>
            <button className="quiz-button" >Q & A</button>
            <button className="quiz-button1">Poll Type</button>
          </div>
          <div className="buttons">
            <button className="cancel-button" onClick={handleClose}>Cancel</button>
            <button className="continue-button">Continue</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default CreateQuiz;
