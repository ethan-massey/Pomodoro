import React, { Component } from 'react';
import MenuBar from "./MenuBar";
import './App.css';

class Help extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                Help <br/>
                -insert info here-
            </div>
        );
    }
}
export default Help;