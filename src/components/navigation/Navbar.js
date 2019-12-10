import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignedOutLink from "./SignedOutLink";
import SignedInLink from "./SignedInLink";
import "./Navbar.css";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={"/"} class={"nav-text"} style={{ textDecoration: 'none' }}>
            Avocadoro
            </Link>
          </Typography>
          {/*<SignedInLink />*/}
          <SignedOutLink />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
