import React, { Component } from "react";
import MenuBar from "./MenuBar";
import "./App.css";
import firebase from "./Firebase.js";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser,
      userStats: [],
      taskCounter: 0
    };
  }

  readFire = () => {
    let str = this.state.userId.email;
    let username = str.slice(0, -4);
    let userTasks = [];
    var userRef = firebase
      .database()
      .ref("users/" + username + "/completedTasks");
    userRef.on("value", function(snapshot) {
      userTasks = [];
      snapshot.forEach(function(innerSnapshot) {
        // console.log(innerSnapshot.val());
        userTasks.push(innerSnapshot.val());
      });
    });
    this.setState({
      userStats: userTasks,
      taskCounter: userTasks.length
    });
  };

  componentDidMount() {
    this.readFire();
  }

  render() {
    return (
      <div>
        <MenuBar />
        <h1>Profile</h1>
        <h2>Completed Tasks</h2>
        <br />
        {this.state.userStats.map(stat => {
          return (
            <ul>
              <li>{stat.taskTitle}</li>
              <li>{stat.taskDetails}</li>
              <li>{stat.taskDate}</li>
            </ul>
          );
        })}
        {this.state.taskCounter}
      </div>
    );
  }
}
export default Profile;
