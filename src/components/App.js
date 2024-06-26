import React from "react";
import { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="app-container">
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
    </div>
  );
};

export default App;
