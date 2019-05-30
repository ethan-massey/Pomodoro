import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebase from "./Firebase";

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

class CreateAccount extends Component {
  classes = useStyles;
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/Profile");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
<div>
        <h1>Create your Pomodoro account</h1>
        <form class="login" className={this.classes.container} noValidate autoComplete="off" onSubmit={this.handleSignUp}>
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
      <Button type="submit">Sign up</Button>
      </form>
      <div class="login">
        <Button>
          <Link to="/">Back</Link>
        </Button>
      </div>
      </div>

      
    //   <div>
    //     <h1>Create your Pomodoro account</h1>
    //     <form onSubmit={this.handleSignUp}>
    //       <label>
    //         Email
    //         <input name="email" type="email" placeholder="Email" />
    //       </label>
    //       <label>
    //         Password
    //         <input name="password" type="password" placeholder="Password" />
    //       </label>
    //       <button type="submit">Sign up</button>
    //     </form>
    //     <br />
    //     <button>
    //       <Link to="/">Back</Link>
    //     </button>
    //   </div>
     );
  }
}

export default withRouter(CreateAccount);
