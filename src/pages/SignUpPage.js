import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpPage.css";
import google from "../assets/icons/google.png";
import apple from "../assets/icons/apple.png";
import rect2 from "../assets/Rectangle-2/Rectangle-2.png";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add sign-up logic here
    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <>
      <h4 className="logo">Your Logo</h4>
      <div className="login-container">
        <div className="login-summary">
          <h1>Sign Up to</h1>
          <h2>Lorem ipsum is simply</h2>
          <p>If you already have an account</p>
          <span>
            You can{"  "}
            <a className="register-here" href="/">
              Login here !
            </a>
          </span>
        </div>
        <div className="rectangle2">
          <img src={rect2} alt="rectangle2" />
        </div>
        <div className="login-box">
          <form onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            <input
              className="reg-input"
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="reg-input"
              type="text"
              placeholder="Create User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="reg-input"
              type="tel"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <input
              className="reg-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="reg-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="reg-button" type="submit">
              Register
            </button>
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

export default SignUpPage;
