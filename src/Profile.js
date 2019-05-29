import React, { Component } from "react";
import MenuBar from "./MenuBar";
import "./App.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        {/* <h1>Profile</h1> <br /> */}
        <h1>Completed Tasks</h1>
        <br />
        <p>
          This will be a list of tasks that were completed. When the finished
          task button is clicked, the list will be added to and rerendered here.
        </p>
      </div>
    );
  }
}
export default Profile;
