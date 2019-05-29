import React, { Component } from 'react';
import MenuBar from "./MenuBar";
import './App.css';

class NewTask extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                New Task <br/>
                -insert new task stuff here, ie timer, info, etc.-
            </div>
        );
    }
}
export default NewTask;