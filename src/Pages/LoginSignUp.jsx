import React from "react";
import  "./CSS/Login_SignUp.css";

const LoginSignUp = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your Name..." />
          <input type="email" placeholder="Email Addres" />
          <input type="password" placeholder="Password" />
        </div>

        <button className="loin-singup-button">Continue</button>
        <p className="loginSignup-login">
          Already have an Account ?<span> Login Here</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Coninuing, i agree to the terms of use & privacy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
