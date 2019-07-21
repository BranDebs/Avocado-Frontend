import React from "react";
import './Timer.css'

const Controls = (props) => {

  const onClickFunc =(e) => {
    switch(e.currentTarget.name) {
      case "start":
        props.setTimerToggleFunc(true);
        break;
      case "pause":
        props.setTimerToggleFunc(false);
        break;
      case "reset":
        props.setTimerToggleFunc(false);
        props.setTimerFunc(props.getInitTimer);
        break;
      default:
        break;
    }
    return;
  }

  return(
    <div className="row controls-container">
      <div className="col s2 offset-s3">
        <a className="waves-effect waves-light btn" name="start" onClick={onClickFunc}>Start</a>
      </div>
      <div className="col s2">
        <a className="waves-effect waves-light btn" name="pause" onClick={onClickFunc}>Pause</a>
      </div>
      <div className="col s2">
        <a className="waves-effect waves-light btn" name="reset" onClick={onClickFunc}>Reset</a>
      </div>
    </div>
  );
}

export default Controls;