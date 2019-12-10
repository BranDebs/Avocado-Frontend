import React from "react";
import {Link, NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

// Functional component
const SignedOutLink = () => {

  return (
    <div>
      <Button>
        <Link to={"/signin"} class={"nav-text"} style={{ textDecoration: 'none' }}>
            Login
        </Link>
      </Button>
      <Button>
        <Link to={"/signup"} class={"nav-text"} style={{ textDecoration: 'none' }}>
            Sign Up
        </Link>
      </Button>
    </div>
  );
};

export default SignedOutLink;
