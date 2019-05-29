import React, { Component } from 'react';
import MenuBar from "./MenuBar";
import './App.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                Profile <br/>
                Completed Tasks <br />
                This will be a list of tasks that were completed. When the finished task button is clicked, the list will be added to and rerendered here.
            </div>
        );
    }
}
export default Profile;