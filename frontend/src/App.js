// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Outlet,
// } from "react-router-dom";
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

// const Layout = () => {
//   return (
//     <div className="app">
//       <Sidebar />
//       <div className="content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/login" element={<LogIn />} />
//         <Route path="/sidebar" element={<Sidebar />} />
//         <Route element={<Layout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/createqa" element={<CreateQA />} />
//           <Route path="/createquiz" element={<CreateQuiz />} />
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/questions" element={<Questions />} />
//           <Route path="/questionbank" element={<QuestionBank />} />
//           <Route path="/score" element={<Score />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;


//with backend

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
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

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sidebar" element={
          <PrivateRoute>
            <Sidebar />
          </PrivateRoute>
        }/>
        <Route element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/createqa" element={<CreateQA />} />
          <Route path="/createquiz" element={<CreateQuiz />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questionbank" element={<QuestionBank />} />
          <Route path="/score" element={<Score />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
