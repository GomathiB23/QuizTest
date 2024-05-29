import React from "react";
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/SignIn";
import LogIn from "./Components/LogIn";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Analytics from "./Components/Analytics";
import CreateQA from "./Components/CreateQA";
import Quiz from "./Components/Quiz";
import CreateQuiz from "./Components/CreateQuiz";
import Questions from "./Components/Questions";
import Score from "./Components/Score";
import QuestionBank from "./Components/QuestionBank";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        {isAuthenticated ? (
          <>
            <Route path="/sidebar" element={<Layout />} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
            <Route path="/createqa" element={<Layout><CreateQA /></Layout>} />
            <Route path="/createquiz" element={<Layout><CreateQuiz /></Layout>} />
            <Route path="/quiz" element={<Layout><Quiz /></Layout>} />
            <Route path="/questions" element={<Layout><Questions /></Layout>} />
            <Route path="/questionbank" element={<Layout><QuestionBank /></Layout>} />
            <Route path="/score" element={<Layout><Score /></Layout>} />
          </>
        ) : (
          <Navigate to="/login" />
        )}
      </Routes>
    </Router>
  );
};

export default App;

