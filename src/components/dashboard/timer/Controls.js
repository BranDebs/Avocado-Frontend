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
      <Button variant={'contained'}>Start</Button>
      <Button variant={'contained'}>Pause</Button>
      <Button variant={'contained'}>Reset</Button>
    </div>
    // <div className="row controls-container">
    //   <div className="col s2 offset-s3">
    //     <a className="waves-effect waves-light btn" name="start" onClick={onClickFunc}>Start</a>
    //   </div>
    //   <div className="col s2">
    //     <a className="waves-effect waves-light btn" name="pause" onClick={onClickFunc}>Pause</a>
    //   </div>
    //   <div className="col s2">
    //     <a className="waves-effect waves-light btn" name="reset" onClick={onClickFunc}>Reset</a>
    //   </div>
    // </div>
  );
};

export default Controls;
