import React, { useState} from 'react';
import './LoginPopup.css';
import cross from './Components/Assests/cross.jpg';

const LoginPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);

    if (value.length < 5) {
      setUsernameError('Please enter valid username');
    } else {
      setUsernameError('');
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (usernameError) {
      return;
    }

    // Check if the username exists in the data source
    const registeredUsers = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      // Add more registered users here
    ];

    const user = registeredUsers.find(
      (user) => user.username === username
    );

    if (!user) {
      setUsernameError('Please enter valid username');
      return;
    }

    // Add your login logic here
    console.log('Login successful');
    onClose(); // Close the popup after login
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="login-popup-overlay">
      <div className="login-popup" >
       
        <form onSubmit={handleSubmit} className='popup'>
       
        <button className="close-button" onClick={handleCloseClick}>
        <img src={cross} alt="Close" />
      </button>

        <h2>Login to SwipTory</h2>
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
          {usernameError && <p className="error">{usernameError}</p>}
          </div>
          
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
