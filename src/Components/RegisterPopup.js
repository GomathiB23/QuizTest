import React, { useState } from 'react';
import './RegisterPopup.css';
import cross from '../Components/Assests/cross.jpg';

const RegisterPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Register button clicked');
    onClose(); // Close the popup after registration
  };
 
 
 const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="register-popup-overlay">
      <div className="register-popup">
       
        <form onSubmit={handleSubmit} className='popup'>
        <img src={cross} alt="cross" className="cross" onClose={handleClosePopup} />
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPopup;
