
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./LogIn.css";
const url = "http://localhost:8080/api/auth"; // in Login.js
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
              <Link to="/">
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
          <div className="group-5a">
            <div className="flex-row-a">
              <span className="email">Email</span>
              <input
                type="email"
                onChange={handleChange}
                value={data.email}
                required
                className="rectangle-6"
              />
            </div>
            <div className="flex-row-b">
              <span className="password-1">Password</span>
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
