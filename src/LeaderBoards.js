import React, { Component } from "react";
import MenuBar from "./MenuBar";
import firebase from "./Firebase";
import "./App.css";

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
    const usersRef = firebase.database().ref("users");

    usersRef.on("value", function(snapshot) {
      console.log(snapshot.val());
      for (var i = 0; i < snapshot.val().length; i++) {
        console.log("hi");
      }

      // console.log(snapshot.val());
    });
  }

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
