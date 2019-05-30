import React from "react";
import "./App.css";

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h1 class="timerHead">
          {this.props.minutes}:{this.props.seconds}
        </h1>
      </div>
    );
  }
}

export default Timer;
