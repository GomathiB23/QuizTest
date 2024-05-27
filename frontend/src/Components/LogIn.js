// import React from 'react';
// import './LogIn.css';

// export default function LogIn() {
//   return (
//     <div className='main-container'>
//       <div className='login-signup'>
//         <div className='rectangle' />
//         <div className='rectangle-1' />
//         <span className='quizzie'>QUIZZIE</span>
//         <div className='group-2'>
//           <div className='group-3'>
//             <button className='button'>
//               <span className='log-in'>Log In</span>
//               <div className='rectangle-4' />
//             </button>
//             <span className='sign-up'>Sign Up</span>
//           </div>
//         </div>
//         <div className='group-5'>
//           <div className='flex-row'>
//             <span className='email'>Email</span>
//             <div className='rectangle-6' />
//           </div>
//           <div className='flex-row-a'>
//             <span className='password'>Password</span>
//             <div className='rectangle-7' />
//           </div>
//         </div>
//         <button className='rectangle-8' />
//         <span className='log-in-9'>Log In</span>
//       </div>
//     </div>
//   );
// }

//with backend

// login.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LogIn.css';

// export default function LogIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch('http://localhost:5000/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       localStorage.setItem('token', data.token);
//       navigate('/sidebar');
//     } else {
//       alert(data.msg);
//     }
//   };

//   return (
//     <div className='main-container'>
//       <div className='login-signup'>
//         <div className='rectangle' />
//         <div className='rectangle-1' />
//         <span className='quizzie'>QUIZZIE</span>
//         <div className='group-2'>
//           <div className='group-3'>
//             <button className='button'>
//               <span className='log-in'>Log In</span>
//             </button>
//             <span className='sign-up'>Sign Up</span>
//           </div>
//         </div>
//         <form onSubmit={handleSubmit} className='login-form'>
//           <div className='group-5'>
//             <div className='flex-row'>
//               <label className='email'>Email</label>
//               <input
//                 type='email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className='rectangle-6'
//                 placeholder='Email'
//                 required
//               />
//             </div>
//             <div className='flex-row-a'>
//               <label className='password'>Password</label>
//               <input
//                 type='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className='rectangle-7'
//                 placeholder='Password'
//                 required
//               />
//             </div>
//           </div>
//           <button type='submit' className='rectangle-8'>
//             <span className='log-in-9'>Log In</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./LogIn.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="main-container">
      <div className="login-signup">
        <div className="rectangle" />
        <div className="rectangle-1" />
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <span className="quizzie">QUIZZIE</span>
          <div className="group-2">
            <div className="group-3">
              <Link to="/signin">
                <button className="button">
                  <span className="sign-up">Sign Up</span>
                </button>
              </Link>
              <Link to="/login">
                <button className="button1">
                  <span className="log-in">Log In</span>
                  <div className="rectangle-4" />
                </button>
              </Link>
            </div>
          </div>
          <div className="group-5">
            <div className="flex-row">
              <span className="email">Email</span>
              <input
                type="email"
                onChange={handleChange}
                value={data.email}
                required
                className="rectangle-6"
              />
            </div>
            <div className="flex-row-a">
              <span className="password">Password</span>
              <input
                type="password"
                onChange={handleChange}
                value={data.password}
                required
                className="rectangle-7"
              />
            </div>
          </div>

          {error && <div className={styles.error_msg}>{error}</div>}
          <br></br>
          <button type="submit" className="rectangle-8">
            <span  className="log-in-9">Log In</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
