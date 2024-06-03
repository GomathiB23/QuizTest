
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignIn.css';
const url = "https://gomathi.onrender.com/";

const SignIn = () => {
  const [data, setData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  

   const handleChange = ({ currentTarget: input }) => {
     setData({ ...data, [input.name]: input.value });
   };

  //  const handleSubmit = async (e) => {
  //   e.preventDefault();
  //    try {
  //      const response = await axios.post("http://localhost:8080/api/users", data);
  //      console.log(response.data.message); // Optional: log the response message
  //      navigate("/login"); // Navigate to login page after successful signup
  //    } catch (error) {
  //      setError(error.response.data.message);
  //    }  };

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Data before submit:", data); // Log data before sending the request
  try {
    const response = await axios.post(url, data);
    console.log("Response:", response.data); // Log response from the backend
    navigate("/login");
  } catch (error) {
    setError(error.response.data.message);
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
               <Link to="/">
                 <button className="button">
                   <div className="rectangle-4" />
                   <span className="log-in">Sign Up</span>
                 </button>
               </Link>
               <Link to="/login">
                 <button className="button1">
                   <span className="log-in">Log In</span>
                 </button>
               </Link>
             </div>
           </div>
          <div className="group-5">
            <div className="flex-row">
              <span className="name1">Name</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={data.name}
                required
                className="rectangle-a"
              />
            </div>
            <div className="flex-row-1">
              <span className="email1">Email</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="rectangle-a"
              />
            </div>
            <div className="flex-row-2">
              <span className="password">Password</span>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="rectangle-a"
              />
            </div>
                         <div className="flex-row-3">
              <span className="confirm-password">Confirm Password</span>
               <input
                 type="password"
                 name="confirmPassword"
                onChange={handleChange}
                 value={data.confirmPassword}
                 required
                 className="rectangle-a"
               />
             </div>
          </div>

          {error && <div className={styles.error_msg}>{error}</div>}
          <br />
          <button type="submit" className="rectangle-signup">
            <span className="log-in-90">Sign Up</span>
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
