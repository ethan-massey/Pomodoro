<<<<<<< HEAD
import React, { Component } from 'react';

import { Route, BrowserRouter as Router} from 'react-router-dom';

import Profile from "./Profile";
import NewTask from "./NewTask";
//import LeaderBoards from "./LeaderBoards";
import Help from "./Help";
//import Logout from ".Logout";
import './App.css';



class App extends Component {

  render() {

    return (
        <Router>
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/NewTask" component={NewTask} />

        {/* <Route exact path="/LeaderBoards" component={LeaderBoards} /> */}

        <Route exact path="/Help" component={Help} />
        {/* <Route exact path="/" component={Logout} /> */}
        </Router>

    );

  }

=======
import React from "react";
import "./App.css";
import Login from "./Login.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
>>>>>>> 662fb316a40b1f70a5b4bff6aa02005d4f20384f
}



export default App;

