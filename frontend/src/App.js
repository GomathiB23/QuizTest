// import React from "react";
// import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import SignIn from "./Components/SignIn";
// import LogIn from "./Components/LogIn";
// import Dashboard from "./Components/Dashboard";
// import Sidebar from "./Components/Sidebar";
// import Analytics from "./Components/Analytics";
// import CreateQA from "./Components/CreateQA";
// import Quiz from "./Components/Quiz";
// import CreateQuiz from "./Components/CreateQuiz";
// import Questions from "./Components/Questions";
// import Score from "./Components/Score";
// import QuestionBank from "./Components/QuestionBank";
// import CreatePoll from "./Components/CreatePoll";

// const Layout = ({ children }) => {
//   return (
//     <div className="app">
//       <Sidebar />
//       <div className="content">{children}</div>
//     </div>
//   );
// };

// const App = () => {
//   const isAuthenticated = !!localStorage.getItem("token");

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/login" element={<LogIn />} />
//         {isAuthenticated ? (
//           <>
//             <Route path="/sidebar" element={<Layout />} />
//             <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
//             <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
//             <Route path="/createqa" element={<Layout><CreateQA /></Layout>} />
//             <Route path="/createpoll" element={<Layout><CreatePoll /></Layout>} />
//             <Route path="/createquiz" element={<Layout><CreateQuiz /></Layout>} />
//             <Route path="/quiz" element={<Layout><Quiz /></Layout>} />
//             <Route path="/questions" element={<Layout><Questions /></Layout>} />
//             <Route path="/questionbank" element={<Layout><QuestionBank /></Layout>} />
//             <Route path="/score" element={<Layout><Score /></Layout>} />
//           </>
//         ) : (
//           <Navigate to="/login" />
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import CreatePoll from "./Components/CreatePoll";

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
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={isAuthenticated ? <Layout><Dashboard /></Layout> : <Navigate to="/login" />} />
        <Route path="/sidebar" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />} />
        <Route path="/analytics" element={isAuthenticated ? <Layout><Analytics /></Layout> : <Navigate to="/login" />} />
        <Route path="/createqa" element={isAuthenticated ? <Layout><CreateQA /></Layout> : <Navigate to="/login" />} />
        <Route path="/createpoll" element={isAuthenticated ? <Layout><CreatePoll /></Layout> : <Navigate to="/login" />} />
        <Route path="/createquiz" element={isAuthenticated ? <Layout><CreateQuiz /></Layout> : <Navigate to="/login" />} />
        <Route path="/quiz" element={isAuthenticated ? <Layout><Quiz /></Layout> : <Navigate to="/login" />} />
        <Route path="/questions" element={isAuthenticated ? <Layout><Questions /></Layout> : <Navigate to="/login" />} />
        <Route path="/questionbank" element={isAuthenticated ? <Layout><QuestionBank /></Layout> : <Navigate to="/login" />} />
        <Route path="/score" element={isAuthenticated ? <Layout><Score /></Layout> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
