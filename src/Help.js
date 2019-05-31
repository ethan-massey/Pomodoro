import React, { Component } from "react";
import MenuBar from "./MenuBar";
import "./App.css";
import firebase from "./Firebase";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

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

class Help extends Component {
  classes = useStyles;
  handleDelete = async event => {
    event.preventDefault();
    try {
      const user = await firebase
        .auth()
        .delete();
        this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };
  
  render() {
    return (
      <div>
        <MenuBar />
        <h1>Need Help?</h1> <br />
        <h2>FAQ</h2>
        <br />
        <h3>What is the Pomodoro Technique? <Button><a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Read about it!</a></Button></h3> 
        <br />
        <h3>How do I move up the leader board? Complete more tasks!</h3> 
        <br/>
        <h3>How do I delete my account? Careful! Action cannot be undone. <Button onClick={this.handleDelete}>Click to delete</Button></h3>
      </div>
    );
  }
}
export default Help;
