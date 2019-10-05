import React, {useState, useEffect} from 'react';
import Selections from './Selections';
import Controls from './Controls';
import TimerInfo from './TimerInfo';
import Avocombo from './Avocombo';

const Timer = () => {
  const TimerState = Object.freeze({AVOCADORO: 1, SHORT_BREAK: 2, LONG_BREAK: 3})
  const [initTimer, setInitTimer] = useState(1500);
  const [timer, setTimer] = useState(initTimer);
  const [hasStarted, setTimerToggle] = useState(false);
  const [timerState, setTimerState] = useState(TimerState.Avocadoro);
  const [avocomboCount, setAvocombo] = useState(0);
  useEffect(() => {
    let interval = null
    if (hasStarted && timer !== 0) {
      if (interval == null) {
        let prevTime = Date.now()
        interval = setInterval(() => {
          setTimer(timer => {
            let curTime = Date.now() ;
            let timeDelta = curTime - prevTime;
            prevTime = curTime
            let calcTime = Math.round(timer - (timeDelta / 1000));
            calcTime = calcTime < 0 ? 0 : calcTime;
            if (calcTime == 0 && timerState == TimerState.AVOCADORO) {
              setAvocombo(avocomboCount + 1)
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
  }, [hasStarted, timer])

  return(
    <div className='card'>
      <Selections setTimerFunc={setTimer} setInitTimerFunc={setInitTimer} setTimerToggleFunc={setTimerToggle} setTimerStateFunc={setTimerState} TimerState={TimerState}/>
      <Avocombo avocomboCount={avocomboCount}/>
      <TimerInfo getTime={formatTimer(timer)} />
      <Controls setTimerFunc={setTimer} getInitTimer={initTimer} setTimerToggleFunc={setTimerToggle}/>
    </div>
  );
};

// Takes seconds and return in the format mm:ss
const formatTimer = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const minsStr = padZeroes(mins, 2);
  const secsStr = padZeroes(secs,2);

  return minsStr + ":" + secsStr;
}

const padZeroes = (num, padding) => {
  let str = num+"";
  while (str.length < padding) str = "0" + str;
  return str
} 

export default Timer;
