import React, { Component } from 'react';
import MenuBar from "./MenuBar";
import './App.css';
import { Input } from 'antd';
import Timer from "./Timer";


class NewTask extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                New Task <br/>
                <Timer /> 
                Task Description <Input placeholder="Write Description"/>
            </div>
        );
    }
}
export default NewTask;