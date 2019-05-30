import React from "react";
import { withRouter } from "react-router";
import firebase from "./Firebase";
import "./App.css";

class Logout extends React.Component {
    handleLogout = async event => {
        event.preventDefault();
        try {
            const user = await firebase
            .auth()
            .signOut().then(this.props.history.push("/"))
        }
        catch (error) {
            alert(error);
        }
    }
}

export default Logout;