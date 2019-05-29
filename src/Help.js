import React, { Component } from "react";
import MenuBar from "./MenuBar";
import "./App.css";

class Help extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <h1>Need Help?</h1> <br />
        <h1>FAQ</h1>
        <br />
        <h2>What is the Pomodoro Technique? -> insert Link</h2> <br />
      </div>
    );
  }
}
export default Help;
