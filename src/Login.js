import React, { Component } from "react";
import { withRouter } from "react-router";

class Login extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    //const email = event.target.
  };

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={this.handleSignUp}>
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
      </div>
    );
  }
}

export default withRouter(Login);
