import React from "react";
import './App.css';

class StartButton extends React.Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.start}> StartButton </button>
            </div>
        )
    }
}

export default StartButton;