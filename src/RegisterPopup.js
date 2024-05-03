import React, { useState} from 'react';
import './RegisterPopup.css';
import cross from './Components/Assests/cross.jpg';
import {useNavigate} from 'react-router-dom';
import MainPage from './MainPage';

const RegisterPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Register button clicked');
    // Navigate to the main page after registration
    navigate('/MainPage');
  };
  
  const handleCloseClick = () => {
    onClose();
  };
  return (
    <div className="register-popup-overlay">
      <div className="register-popup" >
       
        <form onSubmit={handleSubmit} className='popup'>
       
        <button className="close-button" onClick={handleCloseClick}>
        <img src={cross} alt="Close" />
      </button>
        {/* Using the CloseButton component */}
        {/* <CloseButton className="close-button" onClick={handleCloseClick} /> */}
 

        <h2>Register to SwipTory</h2>
          <div className='tags'>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          </div>
          <br />
          <button type="submit" >Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPopup;
