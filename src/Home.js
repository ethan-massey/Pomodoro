import React, { Component } from "react";
import firebase from "./Firebase";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
// import red from '@material-ui/core/colors/red'

// const primary = red[500]; // #F44336

const classes = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

class Home extends Component {
  render() {
    return (
      <div>
      <div className="Login">
        <header className="Login-header">
          <h1>Pomodoro Home</h1>
        </header>
      </div>
      <div className="homePageButtons">
          <p>Have an account?</p>
          <Button variant="contained" color="default" className={classes.button}>
            <Link to="/Login">Login</Link>
          </Button>
          <p>Need an account?</p>
          <Button variant="contained" color="default" className={classes.button}>
            <Link to="/CreateAccount">Create Account</Link>
          </Button>
      </div>
      </div>
    );
  }
}

export default Home;
