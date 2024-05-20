import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from './Components/SignIn';
import LogIn from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Analytics from './Components/Analytics';
import CreateQA from './Components/CreateQA';
import Quiz from './Components/Quiz';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/createQA" element={<CreateQA />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
