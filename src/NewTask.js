import React, { Component } from "react";
import MenuBar from "./MenuBar";
import "./App.css";
import { Input } from "antd";
import Timer from "./Timer";
import StartButton from "./StartButton";
import firebase from "./Firebase.js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

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
  classes = useStyles;
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
      details: "",
      initialStart: false,
      gifs: []
    };

    this.startInitialCountdown = this.startInitialCountdown.bind(this);
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
      clearInterval(this.intervalHandle);
      if (this.state.breakTime) {
        // console.log("starting countdown");
        this.setState({
          seconds: "00",
          minutes: "25"
        });
        this.startCountdown();
      } else {
        // console.log("starting break");
        this.setState({
          breakSeconds: "00",
          breakMinutes: "05"
        });
        this.startBreak();
      }
    }

    this.secondsRemaining--;
  }

  startCountdown() {
    console.log("fuck me");
    // console.log(this.state.on);
    // this.disableButton();
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

  startInitialCountdown() {
    console.log("initial start");
    if (this.state.initialStart === false) {
      // console.log(this.state.on);
      console.log("yo" + this.state.initialStart);
      // this.disableButton();
      // if (this.state.on) {
      this.setState({
        breakTime: false,
        on: true,
        initialStart: true
      });
      console.log("yoyo" + this.state.initialStart);
      //   console.log("startCountdown");
      //   console.log(this.state.breakTime);
      this.intervalHandle = setInterval(this.tick, 1000);
      let time = this.state.minutes;
      this.secondsRemaining = time * 60;
      // }
    }
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

  getGif() {
    // fetch("http://localhost:9000/")
    //   .then(res => this.setState({ gifs: res }));

    axios.get("http://localhost:9000/").then(res =>
      this.setState({
        gifs: res.data
      })
    );
  }

  componentDidMount() {
    this.getGif();
    console.log(this.state.gifs);
  }

  render() {
    let i = 0;
    let mygifs = this.state.gifs.map(gif => {
      return <img src={gif.images.original.url} />;
    });
    let randoGif = mygifs[Math.floor(Math.random() * mygifs.length)];
    return (
      <div>
        <MenuBar />
        <h1 class="timerHead">New Pomodoro Task</h1>
        <p>
          The timer alternates between 25 minute grind sessions and 5 minute
          breaks
        </p>
        <div class="taskinp">
          <TextField
            id="outlined-name"
            name="title"
            label="Title"
            className={this.classes.textField}
            margin="normal"
            variant="outlined"
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>
        <br />
        <div class="taskinp">
          <TextField
            id="outlined-name"
            name="details"
            label="Details"
            className={this.classes.textField}
            margin="normal"
            variant="outlined"
            onChange={e => this.setState({ details: e.target.value })}
          />
        </div>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <div class="mybutton">
          <StartButton start={this.startInitialCountdown} id="startb" />
        </div>
        <br />
        <div class="mybutton">
          <Button
            onClick={this.stopCountdown}
            variant="contained"
            size="large"
            color="primary"
          >
            Pause
          </Button>
          <Button
            onClick={this.resumeCountdown}
            variant="contained"
            size="large"
            color="primary"
          >
            Resume
          </Button>
        </div>
        {/* <div class="mybutton">
          <button class="buttonBar" onClick={this.stopCountdown}>
            Pause
          </button>
          <button onClick={this.resumeCountdown}>Resume</button>
        </div> */}
        <br />
        <div class="mybutton">
          <Button
            onClick={this.handleClick}
            variant="contained"
            size="large"
            color="primary"
          >
            Finish and Submit Job
          </Button>
        </div>
        <br />
        <div id="congrats" />
        <div id="shia" class="hiddenDiv">
          <h1>Mission Accomplished! Well done! Such amaze!</h1>

          <div class="shia">
            {/* <img src={require("./shia.gif")} /> */}
            <div>{randoGif}</div>
          </div>
          <h3>Click on Profile in the navigation to return to your profile!</h3>
        </div>
      </div>
    );
  }
}

export default NewTask;
