import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='main-container'>
      <span className='quizzie'>QUIZZIE</span>
      <div className='vector' />
      <span className='logout'>Logout</span>
      <button className='rectangle' />
      <div className='frame'>
        <span className='dashboard'>Dashboard</span>
        <span className='analytics'>Analytics</span>
        <span className='create-quiz'>Create Quiz</span>
      </div>
    </div>
  );
}
