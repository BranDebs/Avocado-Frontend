import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignedOutLink from "./SignedOutLink";
import SignedInLink from "./SignedInLink";
import "./Navbar.css";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AvocadoroLogo from "./../../images/Avocadoro-icon.png";

const useStyles = makeStyles((theme) => ({
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

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to={"/"} class={"nav-text"} style={{ textDecoration: 'none' }}>
              Avocadoro
              </Link>
            </Typography>
          {/* <Link to="/" className="left Navbar-brand-logo">
            <img className="nav-logo" src={AvocadoroLogo}></img>
            <span>Avocadoro</span>
          </Link> */}
          <SignedInLink />
          {/*<SignedOutLink />*/}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
