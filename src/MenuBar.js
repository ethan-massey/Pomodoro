import { Menu } from 'antd';
import React from 'react';
import "./App.css"
import { Link } from "react-router-dom"

class MenuBar extends React.Component {

  render() {
    return (
      <div>
      <Menu>
        <Menu.Item key="Profile">
          <Link to= "/Profile">
          Profile
          </Link>
        </Menu.Item>
        <Menu.Item key="newTask">
          <Link to= "/NewTask">
          New Task
          </Link>
        </Menu.Item>
        <Menu.Item key="Help">
          <Link to= "/Help">
            Help
          </Link>
        </Menu.Item>
        <Menu.Item key="Logout">
            Log Out
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default MenuBar;
