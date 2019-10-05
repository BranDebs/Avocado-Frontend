import React from 'react';
import './Timer.css'
import {TimeConst, TimerState} from './TimerConst'

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
        props.setTimerFunc(TimeConst.AVOCADORO_TIME);
        props.setInitTimerFunc(TimeConst.AVOCADORO_TIME);
        props.setTimerStateFunc(TimerState.AVOCADORO);
        break;
      case "short_break":
        props.setTimerFunc(TimeConst.SHORT_BREAK_TIME);
        props.setInitTimerFunc(TimeConst.SHORT_BREAK_TIME);
        props.setTimerStateFunc(TimerState.SHORT_BREAK);
        break;
      case "long_break":
        props.setTimerFunc(TimeConst.LONG_BREAK_TIME);
        props.setInitTimerFunc(TimeConst.LONG_BREAK_TIME);
        props.setTimerStateFunc(TimerState.LONG_BREAK);
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
