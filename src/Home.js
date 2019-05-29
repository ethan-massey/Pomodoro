import React, { Component } from "react";
import firebase from "./Firebase";
import { Link } from "react-router-dom";
// import './Login.css';

class Home extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <h1>Pomodoro Home</h1>
          <button>
            <Link to="/Login">Login</Link>
          </button>
          <p>Need an account?</p>
          <button>
            <Link to="/CreateAccount">Create Account</Link>
          </button>
        </header>
      </div>
    );
  }
}

export default Home;
