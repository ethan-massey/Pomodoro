//import { Menu } from 'antd';
import "./App.css";
import { Link } from "react-router-dom";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import cyan from "@material-ui/core/colors/cyan";
import indigo from "@material-ui/core/colors/indigo";

const menuColor = cyan[100];
const textColor = indigo[900];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function MenuBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Pomodoro
          </Typography>
          <Button color="inherit">
            <Link to="/Profile">Profile</Link>
          </Button>
          <Button color="inherit">
            <Link to="/NewTask">New Task</Link>
          </Button>
          <Button color="inherit">
            <Link to="/LeaderBoards">Leader Boards</Link>
          </Button>
          <Button color="inherit">
            <Link to="/Help">Help</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuBar;
