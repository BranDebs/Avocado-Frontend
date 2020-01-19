import React from 'react';
import './Timer.css';
import { TimeConst, TimerState } from 'const/Timer';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
  return (
    <AppBar position="static">
      <Tabs
        value={value}
        aria-label="simple tabs example"
        variant="fullWidth"
        onChange={handleChange}
      >
        <Tab
          label="Avocadoro"
          name="avocadoro"
          onClick={onClickFunc}
          {...a11yProps(0)}
        />
        <Tab
          label="Short Break"
          name="short_break"
          onClick={onClickFunc}
          {...a11yProps(1)}
        />
        <Tab
          label="Long Break"
          name="long_break"
          onClick={onClickFunc}
          {...a11yProps(2)}
        />
      </Tabs>
    </AppBar>
  );
};

export default Selections;
