import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// Functional component
const SignedOutLink = () => {
  return (
    <div>
      <Button>
        <Link
          to={'/signin'}
          className={'nav-text'}
          style={{ textDecoration: 'none' }}
        >
          Login
        </Link>
      </Button>
      <Button>
        <Link
          to={'/signup'}
          className={'nav-text'}
          style={{ textDecoration: 'none' }}
        >
          Sign Up
        </Link>
      </Button>
    </div>
  );
};

export default SignedOutLink;
