import React from 'react';
// assuming cross.svg is the file path to your close icon
import cross from '../Components/Assests/cross.jpg';



import './CloseButton.css'; // assuming you have a CSS file for styling

const CloseButton = ({ onClick, className, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      <img src={cross} alt="Cross" />

    </button>
  );
};

export default CloseButton;
