import React from 'react';
import './SignIn.css';
const SignIn = ({ children, onClick, className, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );    
};

export default SignIn;