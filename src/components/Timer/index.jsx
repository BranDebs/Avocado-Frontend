import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import {
  TimerState,
  AVOCADORO,
  SHORT_BREAK,
  LONG_BREAK,
  AVOCOMBO
} from 'const/timer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './index.css';
import { formatTimer } from 'utils/timerUtil';
import { playAlarm } from 'utils/audio';

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

const Timer = ({ settings }) => {
  const [initTimer, setInitTimer] = useState(settings.avocadoDur);
  const [timer, setTimer] = useState(initTimer);
  const [hasStarted, setTimerToggle] = useState(false);
  const [timerState, setTimerState] = useState(TimerState.AVOCADORO);
  const [avocount, setAvocount] = useState(0);
  const [avocombo, setAvocombo] = useState(false);
  const [avoComboCount, setAvocomboCount] = useState(0);
  useEffect(() => {
    let interval = null;
    if (hasStarted && timer !== 0) {
      if (interval === null) {
        let prevTime = Date.now();
        interval = setInterval(() => {
          setTimer(timer => {
            let curTime = Date.now();
            let timeDelta = curTime - prevTime;
            prevTime = curTime;
            let calcTime = Math.round(timer - timeDelta / 1000);
            calcTime = calcTime < 0 ? 0 : calcTime;
            if (calcTime === 0) {
              if (timerState === TimerState.AVOCADORO) {
                setAvocount(avocount + 1);
              }
              playAlarm();
            }
            return calcTime;
          });
        }, 1000);
      }
    } else {
      if (timer === 0 && avocombo === true) {
        switch (timerState) {
          case TimerState.AVOCADORO:
            setTimer(settings.shortBreakDur);
            setInitTimer(settings.shortBreakDur);
            setTimerState(TimerState.SHORT_BREAK);
            setTimerToggle(settings.autoStartAvocadoro);
            setAvocomboCount(avoComboCount + 1);
            if (avoComboCount >= 4) {
              setTimer(settings.longBreakDur);
              setInitTimer(settings.longBreakDur);
              setTimerState(TimerState.LONG_BREAK);
              setTimerToggle(settings.autoStartBreak);
              setAvocomboCount(0);
            }
            break;
          case TimerState.SHORT_BREAK:
            setTimer(settings.avocadoDur);
            setInitTimer(settings.avocadoDur);
            setTimerState(TimerState.AVOCADORO);
            setTimerToggle(settings.autoStartBreak);
            break;
          case TimerState.LONG_BREAK:
            setTimer(settings.avocadoDur);
            setInitTimer(settings.avocadoDur);
            setTimerState(TimerState.AVOCADORO);
            setTimerToggle(settings.autoStartBreak);
            break;
        }
      }
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [hasStarted, timer]);

  const onSelection = e => {
    switch (e.currentTarget.name) {
      case AVOCADORO:
        setTimer(settings.avocadoDur);
        setInitTimer(settings.avocadoDur);
        setTimerState(TimerState.AVOCADORO);
        break;
      case SHORT_BREAK:
        setTimer(settings.shortBreakDur);
        setInitTimer(settings.shortBreakDur);
        setTimerState(TimerState.SHORT_BREAK);
        break;
      case LONG_BREAK:
        setTimer(settings.longBreakDur);
        setInitTimer(settings.longBreakDur);
        setTimerState(TimerState.LONG_BREAK);
        break;
      case AVOCOMBO:
        setTimer(settings.avocadoDur);
        setInitTimer(settings.avocadoDur);
        setTimerState(TimerState.AVOCADORO);
        setAvocombo(!avocombo);
        break;
      default:
        setTimer(0);
        setInitTimer(0);
        return;
    }
    setTimerToggle(true);
  };

  const Selections = () => {
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
            name={AVOCADORO}
            className={classes.tab}
            onClick={onSelection}
            {...a11yProps(0)}
          />
          <Tab
            label="Short Break"
            name={SHORT_BREAK}
            className={classes.tab}
            onClick={onSelection}
            {...a11yProps(1)}
          />
          <Tab
            label="Long Break"
            name={LONG_BREAK}
            className={classes.tab}
            onClick={onSelection}
            {...a11yProps(2)}
          />
          <Tab
            label="Avocombo"
            name={AVOCOMBO}
            className={classes.tab}
            onClick={onSelection}
          />
        </Tabs>
      </AppBar>
    );
  };

  return (
    <Paper>
      <Grid container>
        <Grid item xs={12}>
          {Selections()}
        </Grid>
        <Grid item xs={12} className={'timer-style'}>
          {avocount}
        </Grid>
        <Grid item xs={12} className={'timer-style'}>
          {formatTimer(timer)}
        </Grid>
        <Grid item xs={12} className={'timer-style'}>
          <Controls
            setTimerFunc={setTimer}
            getInitTimer={initTimer}
            setTimerToggleFunc={setTimerToggle}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Timer;
