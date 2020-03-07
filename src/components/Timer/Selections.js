import React from 'react';
import './index.css';
import { TimerState } from 'const/timer';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

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
        props.setTimerFunc(props.settings.avocadoDur);
        props.setInitTimerFunc(props.settings.avocadoDur);
        props.setTimerStateFunc(TimerState.AVOCADORO);
        break;
      case 'short_break':
        props.setTimerFunc(props.settings.shortBreakDur);
        props.setInitTimerFunc(props.settings.shortBreakDur);
        props.setTimerStateFunc(props.settings.shortBreakDur);
        break;
      case 'long_break':
        props.setTimerFunc(props.settings.longBreakDur);
        props.setInitTimerFunc(props.settings.longBreakDur);
        props.setTimerStateFunc(props.settings.longBreakDur);
        break;
      case 'avocombo':
        props.setTimerFunc(props.settings.avocadoDur);
        props.setInitTimerFunc(props.settings.avocadoDur);
        props.setTimerStateFunc(TimerState.AVOCADORO);
        props.setAvocomboFunc(!props.avocombo);
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
        scrollButtons="auto"
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
          onClick={onClickFunc}
        />
      </Tabs>
    </AppBar>
  );
};

export default Selections;
