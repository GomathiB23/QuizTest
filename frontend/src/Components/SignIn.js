import React from 'react';
import './SignIn.css';

export default function SignIn() {
  return (
    <div className='main-container'>
      <div className='login-signup'>
        <div className='rectangle' />
        <div className='rectangle-1' />
        <span className='quizzie'>QUIZZIE</span>
        <div className='group-2'>
          <div className='group-3'>
            <button className='button'>
              <span className='sign-up'>Sign Up</span>
              <div className='rectangle-4' />
            </button>
            <span className='log-in'>Log In</span>
          </div>
        </div>
        <div className='group-5'>
          <div className='flex-row-af'>
            <span className='name'>Name</span>
            <div className='rectangle-6' />
          </div>
          <div className='flex-row-d'>
            <span className='email'>Email</span>
            <div className='rectangle-7' />
          </div>
          <div className='flex-row-b'>
            <span className='password'>Password</span>
            <div className='rectangle-8' />
          </div>
          <div className='flex-row-bd'>
            <span className='confirm-password'>Confirm Password</span>
            <div className='rectangle-9' />
          </div>
        </div>
        <button className='rectangle-button' />
        <span className='sign-up-span'>Sign-Up</span>
      </div>
    </div>
  );
}
