import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import { AVOCADORO, SHORT_BREAK, LONG_BREAK, AVOCOMBO } from 'const/timer';
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
  const [timerState, setTimerState] = useState(AVOCADORO);
  const [avocount, setAvocount] = useState(0);
  const [avocombo, setAvocombo] = useState(false);
  const [avoComboCount, setAvocomboCount] = useState(0);
  const [timerDur, setTimerDur] = useState({
    AVOCADORO: settings.avocadoDur,
    SHORT_BREAK: settings.shortBreakDur,
    LONG_BREAK: settings.longBreakDur
  });

  const updateTimer = timeState => {
    setTimer(timerDur[timeState]);
    setInitTimer(timerDur[timeState]);
    setTimerState(timeState);
  };

  useEffect(() => {
    let interval = null;
    const handleAvocombo = () => {
      if (timer !== 0) return;

      switch (timerState) {
        case AVOCADORO:
          if (avoComboCount >= 3) {
            updateTimer(LONG_BREAK);
          } else {
            setAvocomboCount(count => count + 1);
            updateTimer(SHORT_BREAK);
          }
          setTimerToggle(settings.autoStartBreak);
          break;
        case SHORT_BREAK:
          updateTimer(AVOCADORO);
          setTimerToggle(settings.autoStartBreak);
          break;
        case LONG_BREAK:
          setAvocomboCount(0);
          setAvocombo(false);
          setTimerToggle(false);
          break;
        default:
          break;
      }
    };
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
              if (timerState === AVOCADORO) {
                setAvocount(avocount + 1);
              }
              playAlarm();
              setTimerToggle(false);
            }
            return calcTime;
          });
        }, 1000);
      }
    } else {
      clearInterval(interval);
      interval = null;
    }

    if (avocombo === true) {
      handleAvocombo();
    }

    document.title = `Avocadoro (${formatTimer(timer)})`;

    return () => clearInterval(interval);
  });

  useEffect(() => {
    setTimerDur({
      AVOCADORO: settings.avocadoDur,
      SHORT_BREAK: settings.shortBreakDur,
      LONG_BREAK: settings.longBreakDur
    });
  }, [settings]);

  const onSelection = e => {
    if (e.currentTarget.name !== AVOCOMBO) {
      updateTimer(e.currentTarget.name);
      setAvocombo(false);
    } else {
      updateTimer(AVOCADORO);
      setAvocombo(true);
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
