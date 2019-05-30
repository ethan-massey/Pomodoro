import React, { Component } from "react";
import MenuBar from "./MenuBar";
import "./App.css";
import { Input } from "antd";
import Timer from "./Timer";
import StartButton from "./StartButton";
import firebase from "./Firebase.js";

// const { TextArea } = Input;

var tempDate = new Date();
var date =
  tempDate.getFullYear() +
  "-" +
  (tempDate.getMonth() + 1) +
  "-" +
  tempDate.getDate() +
  " " +
  tempDate.getHours() +
  ":" +
  tempDate.getMinutes() +
  ":" +
  tempDate.getSeconds();
const currDate = "Current Date= " + date;

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      minutes: "25",
      on: true,
      breakSeconds: "00",
      breakMinutes: "05",
      breakTime: false,
      userId: firebase.auth().currentUser,
      title: "",
      details: ""
    };

    this.startCountdown = this.startCountdown.bind(this);
    this.tick = this.tick.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
    this.startBreak = this.startBreak.bind(this);
    this.resumeCountdown = this.resumeCountdown.bind(this);
  }

  tick() {
    if (this.state.on) {
      var min = Math.floor(this.secondsRemaining / 60);
      var sec = this.secondsRemaining - min * 60;

      this.setState({
        minutes: min,
        seconds: sec
      });

      if (sec < 10) {
        this.setState({
          seconds: "0" + this.state.seconds
        });
      }

      if (min < 10) {
        this.setState({
          minutes: "0" + min
        });
      }
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle); // if break startBreak else startCountdown
      if (this.state.breakTime) {
        // console.log("starting countdown");
        this.setState({
          seconds: "03",
          minutes: "01"
        });
        this.startCountdown();
      } else {
        // console.log("starting break");
        this.setState({
          breakSeconds: "00",
          breakMinutes: "01"
        });
        this.startBreak();
      }
    }

    this.secondsRemaining--;
  }

  startCountdown() {
    console.log(this.state.on);
    // if (this.state.on) {
    this.setState({
      breakTime: false,
      on: true
    });
    //   console.log("startCountdown");
    //   console.log(this.state.breakTime);
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
    // }
  }

  stopCountdown() {
    // change later
    this.setState({
      on: false
    });
    clearInterval(this.intervalHandle);
    console.log(this.state.on);
  }

  resumeCountdown() {
    this.setState({
      breakTime: false,
      on: true
    });
    //   console.log("startCountdown");
    //   console.log(this.state.breakTime);
    this.intervalHandle = setInterval(this.tick, 1000);
    // }
  }

  startBreak() {
    console.log(this.state.on);
    // if (this.state.on) {
    this.setState({
      breakTime: true,
      on: true
    });
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.breakMinutes;
    this.secondsRemaining = time * 60;
    //   console.log(this.state.breakTime);
    // }
  }

  handleClick = () => {
    let str = this.state.userId.email;
    let username = str.slice(0, -4);
    console.log(username);
    this.stopCountdown();
    this.clap("shia");
    const statsRef = firebase
      .database()
      .ref("users/" + username + "/completedTasks");
    const taskdets = {
      taskTitle: this.state.title,
      taskDetails: this.state.details,
      taskDate: currDate
    };
    statsRef.push(taskdets);
    // this.props.updateList();
    // console.log(this.state.name);
  };

  turnOn() {
    this.setState({
      on: true
    });
  }

  clap = divid => {
    document.getElementById("congrats").innerHTML = document.getElementById(
      divid
    ).innerHTML;
  };

  // create a variable to keep track of wheter the current time is in break time or study time... maybe
  render() {
    return (
      <div>
        <MenuBar />
        <h1>New Pomodoro Task</h1>
        <br />
        <div class="taskinp">
          Title:{" "}
          <input onChange={e => this.setState({ title: e.target.value })} />
        </div>
        <br />
        <div class="taskinp">
          Details:{" "}
          <input onChange={e => this.setState({ details: e.target.value })} />
        </div>
        <br />
        <br />
        <br />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <div class="mybutton">
          <StartButton start={this.startCountdown} />
        </div>
        <br />
        <div class="mybutton">
          <button class="buttonBar" onClick={this.stopCountdown}>
            Pause
          </button>
          <button onClick={this.resumeCountdown}>Resume</button>
        </div>
        <br />
        <div class="mybutton">
          <button
            //   onClick={() => this.stopCountdown()}
            onClick={() => this.handleClick()}
          >
            Finished with Task
          </button>
        </div>
        <br />
        <div id="congrats" />
        <div id="shia" class="hiddenDiv">
          <h1>Mission Accomplished! Well done! Such amaze!</h1>
          <div class="shia">
            <img src={require("./shia.gif")} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewTask;
