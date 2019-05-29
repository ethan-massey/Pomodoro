import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebase from "./Firebase";

class CreateAccount extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/Profile");
      console.log(this.props.history);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Create your Pomodoro account</h1>
        <form onSubmit={this.handleSignUp}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Sign up</button>
        </form>
        <br />
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
    );
  }
}

export default withRouter(CreateAccount);
