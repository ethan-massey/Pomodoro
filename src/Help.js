import React, { Component } from "react";
import MenuBar from "./MenuBar";
import "./App.css";
import firebase from "./Firebase";
import Button from "@material-ui/core/Button";

class Help extends Component {
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
        <h3>What is the Pomodoro Technique? <button><a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Read about it!</a></button></h3> 
        <br />
        <h3>How do I move up the leader board? Complete more tasks!</h3> 
        <br/>
        <h3>How do I delete my account? Careful! Action cannot be undone. <button onClick={this.handleDelete}>Click to delete</button></h3>
      </div>
    );
  }
}
export default Help;
