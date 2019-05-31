import React, { Component } from "react";
import MenuBar from "./MenuBar";
import firebase from "./Firebase";
import "./App.css";

var appUsers = [];

class LeaderBoards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    this.readFire();
    this.setState({ mounted: true });
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
        {this.state.mounted ? (
          <ul>
            {appUsers.map((info, index) => (
              <li key={index}>
                Name: {info.name} Number of Tasks: {info.numTasks}
              </li>
            ))}
          </ul>
        ) : (
          <h2>nope!</h2>
        )}
      </div>
    );
  }
}
export default LeaderBoards;
