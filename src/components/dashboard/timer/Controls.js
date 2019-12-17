import React from 'react';
import './Timer.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const Controls = props => {
  const onClickFunc = e => {
    switch (e.currentTarget.name) {
      case 'start':
        props.setTimerToggleFunc(true);
        break;
      case 'pause':
        props.setTimerToggleFunc(false);
        break;
      case 'reset':
        props.setTimerToggleFunc(false);
        props.setTimerFunc(props.getInitTimer);
        break;
      default:
        break;
    }
    return;
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant={'contained'} name="start" onClick={onClickFunc}>
        Start
      </Button>
      <Button variant={'contained'} name="pause" onClick={onClickFunc}>
        Pause
      </Button>
      <Button variant={'contained'} name="reset" onClick={onClickFunc}>
        Reset
      </Button>
    </div>
  );
};

export default Controls;
