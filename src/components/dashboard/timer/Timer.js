import React, { useState, useEffect } from 'react';
import Selections from './Selections';
import Controls from './Controls';
import TimerInfo from './TimerInfo';
import Avocombo from './Avocombo';
import { TimerState, TimeConst } from './TimerConst';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Timer.css';

const Timer = () => {
  let startTimer = parseInt(TimeConst.AVOCADORO_TIME);
  const [initTimer, setInitTimer] = useState(startTimer);
  const [timer, setTimer] = useState(startTimer);
  const [hasStarted, setTimerToggle] = useState(false);
  const [timerState, setTimerState] = useState(TimerState.AVOCADORO);
  const [avocomboCount, setAvocombo] = useState(0);
  useEffect(() => {
    let interval = null;
    if (hasStarted && timer !== 0) {
      if (interval == null) {
        let prevTime = Date.now();
        interval = setInterval(() => {
          setTimer(timer => {
            let curTime = Date.now();
            let timeDelta = curTime - prevTime;
            prevTime = curTime;
            let calcTime = Math.round(timer - timeDelta / 1000);
            calcTime = calcTime < 0 ? 0 : calcTime;
            if (calcTime == 0 && timerState == TimerState.AVOCADORO) {
              setAvocombo(avocomboCount + 1);
            }
            return calcTime;
          });
        }, 1000);
      }
    } else {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [hasStarted, timer]);

  return (
    <Paper>
      <Grid container>
        <Grid item xs={12}>
          <Selections
            setTimerFunc={setTimer}
            setInitTimerFunc={setInitTimer}
            setTimerToggleFunc={setTimerToggle}
            setTimerStateFunc={setTimerState}
          />
        </Grid>
        <Grid item xs={12} className={'timer-style'}>
          <Avocombo avocomboCount={avocomboCount} />
        </Grid>
        <Grid item xs={12} className={'timer-style'}>
          <TimerInfo getTime={formatTimer(timer)} />
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

// Takes seconds and return in the format mm:ss
const formatTimer = seconds => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const minsStr = padZeroes(mins, 2);
  const secsStr = padZeroes(secs, 2);

  return minsStr + ':' + secsStr;
};

const padZeroes = (num, padding) => {
  let str = num + '';
  while (str.length < padding) str = '0' + str;
  return str;
};

export default Timer;
