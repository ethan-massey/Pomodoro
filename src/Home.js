import React, { Component } from "react";
// import './Login.css';

class Home extends Component {
  handleSignUp = () => {};

  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <h1>Pomodoro Home</h1>
          <button>Login</button>
          <p>Need an account?</p>
          <button>Create Account</button>
        </header>
      </div>
    );
  }
}

export default Home;
