import React from "react";
import "./App.css";
import firebase from "./Firebase"

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