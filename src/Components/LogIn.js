import React from 'react';
import './LogIn.css';

export default function LogIn() {
  return (
    <div className='main-container'>
      <div className='login-signup'>
        <div className='rectangle' />
        <div className='rectangle-1' />
        <span className='quizzie'>QUIZZIE</span>
        <div className='group-2'>
          <div className='group-3'>
            <button className='button'>
              <span className='log-in'>Log In</span>
              <div className='rectangle-4' />
            </button>
            <span className='sign-up'>Sign Up</span>
          </div>
        </div>
        <div className='group-5'>
          <div className='flex-row'>
            <span className='email'>Email</span>
            <div className='rectangle-6' />
          </div>
          <div className='flex-row-a'>
            <span className='password'>Password</span>
            <div className='rectangle-7' />
          </div>
        </div>
        <button className='rectangle-8' />
        <span className='log-in-9'>Log In</span>
      </div>
    </div>
  );
}
