import React from 'react';
import { Link } from 'react-router-dom';
import AvocadoroIcon from 'images/Avocadoro-icon.svg';
import { UiConst } from 'const/ui';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import './index.css';

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

const Navbar = ({ onSettings }) => {
  const loggedIn = false;

  const handleSettingOpen = () => {
    onSettings(true);
  };

  const SignedInLink = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Typography display={'inline'}>69</Typography>
        <IconButton onClick={() => handleSettingOpen()} color="inherit">
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={handleMenu} color="inherit">
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </div>
    );
  };

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

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} align={'left'}>
            <Link
              to={'/'}
              className={'nav-text'}
              style={{ textDecoration: 'none' }}
            >
              Avocadoro
              <Icon>
                <img
                  src={AvocadoroIcon}
                  alt="AvocadoroToast"
                  height={UiConst.ICON_HEIGHT}
                />
              </Icon>
            </Link>
          </Typography>
          {loggedIn ? <SignedInLink /> : <SignedOutLink />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
