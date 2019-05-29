import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "./Firebase";

class CreateAccount extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value);
    console.log(password.value);
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
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
      </div>
    );
  }
}

export default withRouter(CreateAccount);
