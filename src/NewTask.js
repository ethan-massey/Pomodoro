import React, { Component } from 'react';
import MenuBar from "./MenuBar";
import './App.css';
import { Input } from 'antd';
import Timer from "./Timer";
import StartButton from "./StartButton";
import DateAndTime from "./DateAndTime"

const { TextArea } = Input;

class NewTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            seconds:'00',
            minutes: '25',
            on: false
        }

    this.startCountdown = this.startCountdown.bind(this);
    this.tick = this.tick.bind(this);
    }

    tick() {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min*60);

        this.setState({
            minutes: min,
            seconds: sec
        })

        if (sec < 10){ 
        this.setState({
            seconds:"0" + this.state.seconds,
        })
        }

        if (min < 10) {
            this.setState({
                minutes: "0" + min,
            })
        }

        if (min === 0 & sec === 0) {
            clearInterval(this.intervalHandle);
        }

        this.secondsRemaining--
    }

    startCountdown() {
        if (this.state.on === false) {
            this.intervalHandle = setInterval(this.tick, 1000);
            let time = this.state.minutes;
            this.secondsRemaining = time * 60;
            this.setState({
                on: true
            })
        }
    }


    render() {
        return (
            <div>
                <MenuBar />
                New Task <br/>
                <Timer minutes = {this.state.minutes} seconds= {this.state.seconds}/> 
                <StartButton start = {this.startCountdown}/>
                Task Description <TextArea rows={4} />
            </div>
        );
    }
}

export default NewTask;