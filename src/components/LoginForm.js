import React from "react";
import "./../styles/App.css";
const LoginForm = ({ isLoggedIn, setLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <h1 className="logged-in-heading">You are logged in!</h1>
      ) : (
        <div className="form-container">
          <form className="login-form">
            <input type="text" placeholder="username" className="form-input" />
            <input
              type="password"
              placeholder="password"
              className="form-input"
            />
            <button onClick={() => setLoggedIn(true)} className="form-button">
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginForm;
