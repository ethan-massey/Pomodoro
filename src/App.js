import React, { Component } from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";

import Profile from "./Profile";
import NewTask from "./NewTask";
import LeaderBoards from "./LeaderBoards";
import Help from "./Help";
import Home from "./Home";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
//import Logout from ".Logout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/CreateAccount" component={CreateAccount} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/NewTask" component={NewTask} />

        <Route exact path="/LeaderBoards" component={LeaderBoards} />

        <Route exact path="/Help" component={Help} />
        {/* <Route exact path="/" component={Logout} /> */}
      </Router>
    );
  }
}

export default App;
