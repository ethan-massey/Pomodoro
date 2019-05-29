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
      seconds: "03",
      minutes: "01",
      on: false,
      breakSeconds: "00",
      breakMinutes: "01",
      breakTime: false,
      userId: firebase.auth().currentUser
    };

    this.startCountdown = this.startCountdown.bind(this);
    this.tick = this.tick.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
  }

  tick() {
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

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle); // if break startBreak else startCountdown
      if (this.state.breakTime) {
        console.log("starting countdown");
        this.setState({
          seconds: "03",
          minutes: "01"
        });
        this.startCountdown();
      } else {
        console.log("starting break");
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
    this.setState({
      breakTime: false
    });
    console.log("startCountdown");
    console.log(this.state.breakTime);
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  }

  stopCountdown() {
    // change later
    this.setState({
      on: false
    });
    clearInterval(this.intervalHandle);
  }

  startBreak() {
    this.setState({
      breakTime: true
    });
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.breakMinutes;
    this.secondsRemaining = time * 60;
    console.log(this.state.breakTime);
  }

    // handleClick = () => {
    //   const statsRef = firebase.database().ref("users/" + this.state.userId);
    //   const taskdets = {
    //     taskTitle: this.state.name,
    //     taskDetails: this.state.details,
    //     taskDate: currDate
    //   };
    //   statsRef.push(taskdets);
    //   // this.props.updateList();
    //   // console.log(this.state.name);
    // };

  render() {
    return (
      <div>
        <MenuBar />
        <h1>New Pomodoro Task</h1>
        <br />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <StartButton start={this.startCountdown} />
        <button onClick={this.stopCountdown} onClick={() => this.handleClick()}>
          Finished with Task
        </button>
        <br />
        Title: <input />
        <br />
        Details: <input />
        <br />
        <br />
      </div>
    );
  }
}

export default NewTask;
