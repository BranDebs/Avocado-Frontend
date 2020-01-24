import React, { useState, useEffect } from 'react';
import Selections from './Selections';
import Controls from './Controls';
import TimerInfo from './TimerInfo';
import Avocombo from './Avocombo';
import { TimerState } from 'const/Timer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Timer.css';
import { formatTimer } from 'utils/timerUtil';
import { playAlarm } from 'utils/audio';

const Timer = ({ settings }) => {
  const [initTimer, setInitTimer] = useState(settings.settings.avocadoDur);
  const [timer, setTimer] = useState(initTimer);
  const [hasStarted, setTimerToggle] = useState(false);
  const [timerState, setTimerState] = useState(TimerState.AVOCADORO);
  const [avocomboCount, setAvocombo] = useState(0);
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
                setAvocombo(avocomboCount + 1);
              }
              playAlarm();
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
            settings={settings.settings}
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

export default Timer;
