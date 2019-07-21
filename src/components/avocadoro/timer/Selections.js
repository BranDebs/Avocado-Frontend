import React from 'react';
import './Timer.css'

const AVOCADORO_TIMER = 1500;
const SHORT_BREAK_TIMER = 300;
const LONG_BREAK_TIMER = 900;

const Selections = (props) => {
  const onClickFunc = (e) => {
    // Sets all collections to not be active
    let nodes = e.currentTarget.parentNode.childNodes;

    nodes.forEach(node => {
      node.className="tab white-text";
    });

    switch (e.currentTarget.name) {
      case "avocadoro":
        props.setTimerFunc(AVOCADORO_TIMER);
        props.setInitTimerFunc(AVOCADORO_TIMER);
        break;
      case "short_break":
        props.setTimerFunc(SHORT_BREAK_TIMER);
        props.setInitTimerFunc(SHORT_BREAK_TIMER);
        break;
      case "long_break":
        props.setTimerFunc(LONG_BREAK_TIMER);
        props.setInitTimerFunc(LONG_BREAK_TIMER);
        break;
      default:
        props.setTimerFunc(0);
        props.setInitTimerFunc(0);
        return;
    }
    e.currentTarget.className = "tab active-tab white-text";
    props.setTimerToggleFunc(true);
  }

  return (
    // Find ways to make this inline
      <div class="row">
        <div class="col s12">
          <div className="card-tabs cursor-pointer">
            <ul className="tabs gradient-red-pink">
              <li class="tab col s3"><a className="tab active-tab white-text" name="avocadoro" onClick={onClickFunc}>Avocadoro</a></li>
              <li class="tab col s3"><a className="tab white-text" name="short_break" onClick={onClickFunc}>Short Break</a></li>
              <li class="tab col s3"><a className="tab white-text" name="long_break" onClick={onClickFunc}>Long Break</a></li>
              <li class="tab col s3"><a href="#!" className="tab white-text">Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
  );
}


export default Selections;
