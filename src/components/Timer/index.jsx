import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import { AVOCADORO, SHORT_BREAK, LONG_BREAK, AVOCOMBO } from 'const/timer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './index.css';
import { formatTimer } from 'utils/timerUtil';
import { playAlarm } from 'utils/audio';
import AppBar from '@material-ui/core/AppBar';
import { TIMER_STYLE } from 'const/timer';
import { StyledTab, StyledTabs } from 'const/tab';

function tabControl(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const Timer = ({ settings, timer, addAvocount }) => {
  const [initTimer, setInitTimer] = useState(settings.avocadoDur);
  const [timerValue, setTimerValue] = useState(initTimer);
  const [hasStarted, setTimerToggle] = useState(false);
  const [timerState, setTimerState] = useState(AVOCADORO);
  const avocount = timer.avocount;
  const [avocombo, setAvocombo] = useState(false);
  const [avoComboCount, setAvocomboCount] = useState(0);
  const [timerDur, setTimerDur] = useState({
    AVOCADORO: settings.avocadoDur,
    SHORT_BREAK: settings.shortBreakDur,
    LONG_BREAK: settings.longBreakDur
  });
  const classes = TIMER_STYLE();

  const updateTimer = timeState => {
    setTimerValue(timerDur[timeState]);
    setInitTimer(timerDur[timeState]);
    setTimerState(timeState);
  };

  useEffect(() => {
    let interval = null;
    const handleAvocombo = () => {
      if (timerValue !== 0) return;

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
    if (hasStarted && timerValue !== 0) {
      if (interval === null) {
        let prevTime = Date.now();
        interval = setInterval(() => {
          setTimerValue(timer => {
            let curTime = Date.now();
            let timeDelta = curTime - prevTime;
            prevTime = curTime;
            let calcTime = Math.round(timer - timeDelta / 1000);
            calcTime = calcTime < 0 ? 0 : calcTime;
            if (calcTime === 0) {
              if (timerState === AVOCADORO) {
                addAvocount();
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

    document.title = `Avocadoro [${avocount}] (${formatTimer(timerValue)})`;

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

    return (
      <AppBar position="static">
        <StyledTabs
          value={value}
          variant="scrollable"
          onChange={handleChange}
          centered
        >
          <StyledTab
            label="Avocadoro"
            name={AVOCADORO}
            onClick={onSelection}
            {...tabControl(0)}
          />
          <StyledTab
            label="Short Break"
            name={SHORT_BREAK}
            onClick={onSelection}
            {...tabControl(1)}
          />
          <StyledTab
            label="Long Break"
            name={LONG_BREAK}
            onClick={onSelection}
            {...tabControl(2)}
          />
          <StyledTab
            label="Avocombo"
            name={AVOCOMBO}
            onClick={onSelection}
          />
        </StyledTabs>
      </AppBar>
    );
  };

  return (
    <Paper >
      <Grid container>
        <Grid item xs={12}>
          {Selections()}
        </Grid>
        <Grid item xs={12} className={classes.timer}>
          {avocount}
        </Grid>
        <Grid item xs={12} className={classes.timer}>
          {formatTimer(timerValue)}
        </Grid>
        <Grid item xs={12} className={classes.timer}>
          <Controls
            setTimerFunc={setTimerValue}
            getInitTimer={initTimer}
            setTimerToggleFunc={setTimerToggle}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Timer;
