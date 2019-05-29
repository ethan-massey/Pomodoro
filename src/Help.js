import React, { Component } from 'react';
import MenuBar from "./MenuBar";
import './App.css';

class Help extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                Help <br/>
                FAQ <br/>
                What is the Pomodoro Technique? -> insert Link <br/>
            </div>
        );
    }
}
export default Help;