import React, {useState, useEffect} from 'react';
import Selections from './Selections';

const Timer = () => {

  const [timer, setTimer] = useState(1500);
  const [hasStarted, setTimerToggle] = useState(false);

  useEffect(() => {
    let interval = null
    if (hasStarted && timer !== 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [hasStarted, timer])

  return(
    <div>
      <Selections setTimerFunc={setTimer} setTimerToggleFunc={setTimerToggle}/>
      {formatTimer(timer)}
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
