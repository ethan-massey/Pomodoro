import React, { Component } from "react";
import MenuBar from "./MenuBar";
import firebase from "./Firebase";
import "./App.css";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { makeStyles } from "@material-ui/core/styles";

var appUsers = [];
let sortedUsers = [];
let curIndex = 0;
let curMax;

const styles = {
  propContainer: {
    width: 200,
    overflow: "hidden",
    margin: "20px auto 0"
  },
  propToggleHeader: {
    margin: "20px auto 10px"
  }
};

class LeaderBoards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      selected: [1],
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true
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

      appUsers = []; // getting rid of the repeating info bug
      // for user in users
      for (var i in users) {
        // for task in completed tasks
        appUsers.push({ name: Object.getOwnPropertyNames(snapshot.val())[i] });
        let tasks = 0;
        for (var task in users[i].completedTasks) {
          tasks++;
        }
        appUsers[i].numTasks = tasks;
        // console.log(appUsers);
      }
    });

    for (let i = 0; i < appUsers.length; i++) {
      curIndex = 0;
      curMax = 0;
      for (let j = 0; j < appUsers.length; j++) {
        if (appUsers[j] > curMax) {
          curIndex = j;
        }
      }
      sortedUsers.push(appUsers[curIndex]);
      delete appUsers[curIndex];
    }
    console.log(sortedUsers);
  };

  render() {
    return (
      <div>
        <MenuBar />
        <h6 class="leaderHead">Leader Board</h6>
        {/* {this.state.mounted ? (
          <h3>
            {appUsers.map((info, index) => (
              <li>
                Name: {info.name} Number of Tasks: {info.numTasks}
              </li>
            ))}
          </h3>
        ) : (
          <h2>nope!</h2>
        )} */}
        <MuiThemeProvider>
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
          >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}
            >
              <TableRow>
                <TableHeaderColumn
                  colSpan="3"
                  tooltip="Super Header"
                  style={{ fontSize: 30 }}
                />
              </TableRow>
              <TableRow>
                <TableHeaderColumn tooltip="The ID">Username</TableHeaderColumn>

                <TableHeaderColumn tooltip="The Status">
                  Score
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {appUsers.map(info => (
                <TableRow>
                  <TableRowColumn>{info.name}</TableRowColumn>
                  <TableRowColumn>{info.numTasks}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter adjustForCheckbox={this.state.showCheckboxes}>
              <TableRow>
                <TableRowColumn colSpan="3" style={{ textAlign: "center" }} />
              </TableRow>
            </TableFooter>
          </Table>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default LeaderBoards;
