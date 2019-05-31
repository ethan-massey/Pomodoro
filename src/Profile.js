import React, { Component } from "react";
import MenuBar from "./MenuBar";
import "./App.css";
import firebase from "./Firebase.js";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

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

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: firebase.auth().currentUser,
      userStats: [],
      taskCounter: 0,
      selected: [1],
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: "300px"
    };
  }

  readFire = () => {
    let userTasks = [];
    let str = this.state.userId.email;
    let username = str.slice(0, -4);
    var userRef = firebase
      .database()
      .ref("users/" + username + "/completedTasks");
    userRef.on("value", snapshot => {
      let snapval = snapshot.val();
      // userTasks = [];
      for (let i in snapval) {
        // console.log(snapval[i]);
        userTasks.push(snapval[i]);
        // console.log(userTasks[i]);
      }
      // snapval.forEach(function(innerSnapshot) {
      //   // console.log(innerSnapshot.val());
      //   userTasks.push(innerSnapshot.val());
      // });
      // console.log("logging user tasks");
      // console.log(userTasks);
      this.setState({
        userStats: userTasks,
        taskCounter: userTasks.length
      });
    });
  };

  componentDidMount() {
    this.readFire();
    // console.log("logging user tasks");
    // console.log(userTasks);
    // this.setState({
    //   userStats: userTasks,
    //   taskCounter: userTasks.length
    // });
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

  handleChange = event => {
    this.setState({ height: event.target.value });
  };

  render() {
    console.log(this.state.userId.email);
    return (
      <div>
        <MenuBar />
        <h1 class="profileHead">Profile</h1>
        {/* <h2>Completed Tasks</h2> */}
        <br />
        <div class="user">
          <Chip
            icon={<FaceIcon />}
            label={this.state.userId.email}
            clickable
            color="primary"
            variant="outlined"
          />
        </div>
        <br />
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
                >
                  Task History
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn tooltip="The ID">
                  Task Title
                </TableHeaderColumn>
                <TableHeaderColumn tooltip="The Name">
                  Details
                </TableHeaderColumn>
                <TableHeaderColumn tooltip="The Status">
                  Date Completed
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {this.state.userStats.map(stat => (
                <TableRow>
                  <TableRowColumn>{stat.taskTitle}</TableRowColumn>
                  <TableRowColumn>{stat.taskDetails}</TableRowColumn>
                  <TableRowColumn>{stat.taskDate.slice(14)}</TableRowColumn>
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
        {/* {this.state.userStats.map(stat => {
          return (
            <ul>
              <li>{stat.taskTitle}</li>
              <li>{stat.taskDetails}</li>
              <li>{stat.taskDate}</li>
            </ul>
          );
        })}
        {this.state.taskCounter} */}
      </div>
    );
  }
}
export default Profile;
