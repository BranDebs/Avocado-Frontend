import React from 'react';
import { Link } from 'react-router-dom';
import SignedOutLink from './SignedOutLink';
import SignedInLink from 'containers/SignedInLink';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import AvocadoroIcon from 'images/Avocadoro-icon.svg';
import { UiConst } from 'components/const/UiConst';

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

const Navbar = () => {
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
                <img src={AvocadoroIcon} alt="AvocadoroToast" height={UiConst.ICON_HEIGHT} />
              </Icon>
            </Link>
          </Typography>
          <SignedInLink />
          <SignedOutLink />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
