import React from 'react';
import './Timer.css'

const AVOCADORO_TIMER = 1500;
const SHORT_BREAK_TIMER = 300;
const LONG_BREAK_TIMER = 900;

const Selections = (props) => {
  const onClickFunc = (e) => {
    // Sets all collections to not be active
    let parentNodes = e.currentTarget.parentNode.parentNode.childNodes;
    parentNodes.forEach(element => {
      element.childNodes.forEach(node => {
        node.className="white-text";
      });
    });

    switch (e.currentTarget.name) {
      case "avocadoro":
        props.setTimerFunc(AVOCADORO_TIMER);
        props.setInitTimerFunc(AVOCADORO_TIMER);
        props.setTimerStateFunc(props.TimerState.AVOCADORO);
        break;
      case "short_break":
        props.setTimerFunc(SHORT_BREAK_TIMER);
        props.setInitTimerFunc(SHORT_BREAK_TIMER);
        props.setTimerStateFunc(props.TimerState.SHORT_BREAK);
        break;
      case "long_break":
        props.setTimerFunc(LONG_BREAK_TIMER);
        props.setInitTimerFunc(LONG_BREAK_TIMER);
        props.setTimerStateFunc(props.TimerState.LONG_BREAK);
        break;
      case "settings":
        props.setTimerToggleFunc(false);

      default:
        props.setTimerFunc(0);
        props.setInitTimerFunc(0);
        return;
    }
    e.currentTarget.className = "active-tab white-text";
    props.setTimerToggleFunc(true);
  }

  return (
    <div class="row">
      <div class="col s12">
        <div className="card-tabs cursor-pointer">
          <ul className="tabs pink accent-1">
            <li class="tab col s3"><a className="active-tab white-text" name="avocadoro" onClick={onClickFunc}>Avocadoro</a></li>
            <li class="tab col s3"><a className="white-text" name="short_break" onClick={onClickFunc}>Short Break</a></li>
            <li class="tab col s3"><a className="white-text" name="long_break" onClick={onClickFunc}>Long Break</a></li>
            <li class="tab col s3"><a href="#!" className="white-text">Settings</a></li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Selections;
