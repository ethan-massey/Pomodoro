import React, { Component } from "react";
import MenuBar from "./MenuBar";
import firebase from "./Firebase";
import "./App.css";

const appUsers = [];

class LeaderBoards extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.readFire();
  }

  readFire = () => {
    let users = [];
    const usersRef = firebase.database().ref("users");

    usersRef.on("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        users.push(childSnapshot.val());
      });

      // for user in users
      for (var i in users) {
        // for task in completed tasks
        appUsers.push({ name: Object.getOwnPropertyNames(snapshot.val())[i] });
        let tasks = 0;
        for (var task in users[i].completedTasks) {
          tasks++;
        }
        appUsers[i].numTasks = tasks;

        console.log(appUsers);
      }
    });
  };

  render() {
    return (
      <div>
        <MenuBar />
        <h6>LeaderBoard</h6>
        <h2 />
      </div>
    );
  }
}
export default LeaderBoards;
