import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "./Firebase";
import { Link } from "react-router-dom";
import "./App.css";

class Login extends Component {

  handleLogin = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/Profile");
    } catch (error) {
      alert("Username or passord is incorrect");
    }
  };

  render() {
    return (
      <div>
        <h1>Log in to Pomodoro</h1>
        <form onSubmit={this.handleLogin}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Log in</button>
        </form>
        <br />
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
    );
  }
}

export default withRouter(Login);
