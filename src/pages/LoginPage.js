import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginData from "../data/loginData.json";
import "../styles/LoginPage.css";
import google from "../assets/icons/google.png";
import apple from "../assets/icons/apple.png";
import rect2 from "../assets/Rectangle-2/Rectangle-2.png";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === loginData.username && password === loginData.password) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <h4 className="logo">Your Logo</h4>
      <div className="login-container">
        <div className="login-summary">
          <h1>Sign in to</h1>
          <h2>Lorem ipsum is simply</h2>
          <p>If you don't have an account register</p>
          <span>
            You can{"  "}
            <a className="register-here" href="#/signup">
              Register here !
            </a>
          </span>
        </div>
        <div className="rectangle2">
          <img src={rect2} alt="rectangle2" />
        </div>
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <h2>Sign in</h2>
            <input
              type="text"
              placeholder="Enter email or user name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className="forgot" href="/">
              Forgot password ?
            </a>
            <button type="submit">Login</button>
          </form>
          <p className="continue-with">or continue with</p>
          <div className="continue-icon">
            <a rel="noreferrer" target="_blank" href="https://apple.com">
              <img src={apple} alt="icon" />
            </a>
            <a rel="noreferrer" target="_blank" href="https://google.com">
              <img src={google} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
