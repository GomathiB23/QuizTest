import React from 'react';
import './RegisterNow.css';
const RegisterNow = ({ children, onClick, className, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );    
};

export default RegisterNow;