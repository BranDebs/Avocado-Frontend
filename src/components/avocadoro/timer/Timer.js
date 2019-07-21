import React, {useState, useEffect} from 'react';
import Selections from './Selections';
import Controls from './Controls';

const Timer = () => {

  const [initTimer, setInitTimer] = useState(1500);
  const [timer, setTimer] = useState(initTimer);
  const [hasStarted, setTimerToggle] = useState(false);

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
      <Selections setTimerFunc={setTimer} setInitTimerFunc={setInitTimer} setTimerToggleFunc={setTimerToggle}/>
      <div className='timer-style'>{formatTimer(timer)}</div>
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
