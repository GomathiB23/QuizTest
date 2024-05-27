
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignIn.css";
const url = "http://localhost:8080/api/users"; // in SignIn.js
const SignIn = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const validate = () => {
    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      setError("All fields are required");
      return false;
    }
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
          <Link to='/login'>
		  <button type="submit" className="rectangle-signup">
            <span className="log-in-90">Sign Up</span>
          </button>
		  </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
