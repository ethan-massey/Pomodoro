import React, { Component } from "react";
import MenuBar from "./MenuBar";
import firebase from "./Firebase";
import "./App.css";
import { func } from "prop-types";

class LeaderBoards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // {name: foo, totalTasks: foo}
      users: [],
      sortedUsers: [
        { name: "Ethan", totalTasks: 53 },
        { name: "Mike", totalTasks: 43 },
        { name: "John", totalTasks: 35 }
      ]
    };
  }

  componentDidMount() {
    this.readFire();
  }

  readFire = () => {
    const usersRef = firebase.database().ref("users");
    let trash = [];
    // trash.push(1);

    usersRef.on("value", function(snapshot) {
      // trash = [];
      trash.push(1);
      snapshot.forEach(function(childSnapshot) {
        console.log("pushing to trash");
        trash.push("fuck me");
        console.log(childSnapshot.val());
      });
    });
    this.setState({
      users: trash
    });
    console.log("TRASH");
    console.log(trash);
  };

  render() {
    let sortedUsers = this.state.sortedUsers.map(user => {
      return (
        <ol>
          {user.name}
          {user.totalTasks}
        </ol>
      );
    });
    return (
      <div>
        <MenuBar />
        <h6>LeaderBoard</h6>
        <h2>{sortedUsers}</h2>
      </div>
    );
  }
}
export default LeaderBoards;
