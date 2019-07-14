import React from "react";

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
    <div>
      <a className="waves-effect waves-light btn" name="start" onClick={onClickFunc}>Start</a>
      <a className="waves-effect waves-light btn" name="pause" onClick={onClickFunc}>Pause</a>
      <a className="waves-effect waves-light btn" name="reset" onClick={onClickFunc}>Reset</a>
    </div>
  );
}

export default Controls;