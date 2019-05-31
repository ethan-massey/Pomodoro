import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const classes = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

class Home extends Component {
  render() {
    return (
      <div className="Login">
        <br />
        <br />
        <br />
        <br />
        <br />
        <header className="Login-header">
          <h1 class="loginHead">Pomodoro Home</h1>
        </header>
        <div className="homePageButtons">
          <p>Have an account?</p>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
          >
            <Link to="/Login">Login</Link>
          </Button>
          <p>Need an account?</p>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
          >
            <Link to="/CreateAccount">Create Account</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
