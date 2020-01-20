import React from 'react';
import './Timer.css';
import { TimeConst, TimerState } from 'const/Timer';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {makeStyles} from "@material-ui/core/styles";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const Selections = props => {
  const onClickFunc = e => {
    switch (e.currentTarget.name) {
      case 'avocadoro':
        props.setTimerFunc(TimeConst.AVOCADORO_TIME);
        props.setInitTimerFunc(TimeConst.AVOCADORO_TIME);
        props.setTimerStateFunc(TimerState.AVOCADORO);
        break;
      case 'short_break':
        props.setTimerFunc(TimeConst.SHORT_BREAK_TIME);
        props.setInitTimerFunc(TimeConst.SHORT_BREAK_TIME);
        props.setTimerStateFunc(TimerState.SHORT_BREAK);
        break;
      case 'long_break':
        props.setTimerFunc(TimeConst.LONG_BREAK_TIME);
        props.setInitTimerFunc(TimeConst.LONG_BREAK_TIME);
        props.setTimerStateFunc(TimerState.LONG_BREAK);
        break;
      case 'settings':
        props.setTimerToggleFunc(false);
        break;
      default:
        props.setTimerFunc(0);
        props.setInitTimerFunc(0);
        return;
    }
    props.setTimerToggleFunc(true);
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles(theme => ({
    tab: {
      minWidth: 115
    }
  }));
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Tabs
        value={value}
        variant="scrollable"
        onChange={handleChange}
        scrollButtons='auto'
      >
        <Tab
          label="Avocadoro"
          name="avocadoro"
          className={classes.tab}
          onClick={onClickFunc}
          {...a11yProps(0)}
        />
        <Tab
          label="Short Break"
          name="short_break"
          className={classes.tab}
          onClick={onClickFunc}
          {...a11yProps(1)}
        />
        <Tab
          label="Long Break"
          name="long_break"
          className={classes.tab}
          onClick={onClickFunc}
          {...a11yProps(2)}
        />
        <Tab
          label="Avocombo"
          name="avocombo"
          className={classes.tab}
        />
      </Tabs>
    </AppBar>
  );
};

export default Selections;
