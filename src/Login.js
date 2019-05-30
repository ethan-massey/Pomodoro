import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "./Firebase";
import { Link } from "react-router-dom";
import "./App.css";

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

class Login extends Component {
  classes = useStyles;
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
        <form class="login" className={this.classes.container} noValidate autoComplete="off" onSubmit={this.handleLogin}>
      <TextField
        id="outlined-name"
        name="email"
        label="Email"
        type="email"
        className={this.classes.textField}
        margin="normal"
        variant="outlined"
      />
            <TextField
        id="outlined-name"
        name="password"
        label="Password"
        type="password"
        className={this.classes.textField}
        margin="normal"
        variant="outlined"
      />
      <Button type="submit">Log in</Button>
      </form>
      <div class="login">
        <Button>
          <Link to="/">Back</Link>
        </Button>
      </div>
      </div>
    );
  }
}

export default withRouter(Login);
