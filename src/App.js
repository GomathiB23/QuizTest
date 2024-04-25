// App.js
import React from 'react';
import './App.css';
import RegisterNow from './Components/RegisterNow';
import SignIn from './Components/SignIn';
import ImageAlign from './Components/ImageAlign';

function App() {

  const handleClick = () => {
    console.log('Button clicked!');
  };
  const handleClick1 = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='navbar'>
        <h1>SwipTory</h1>
        <button onClick={handleClick} className="button">
        Register Now
        </button>
        <button onClick={handleClick1} className="button1">
        SignIn
        </button>
        </div>
      </header>
      <main>
        <ImageAlign />
        <section>
          <h2>Top Stories About food</h2>
          <p >No stories Available</p>
        </section>
        <section>
          <h2 className='gg'>Top Stories About Medical</h2>
          <p>No stories Available</p>
        </section>
      </main>
    </div>
  );
}

export default App;