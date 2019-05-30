import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

class StartButton extends React.Component {
  render() {
    return (
      <div>
        {/* <button onClick={this.props.start}> StartButton </button> */}
        <Button
          onClick={this.props.start}
          variant="contained"
          size="large"
          color="primary"
        >
          Start Timer
        </Button>
      </div>
    );
  }
}

export default StartButton;
