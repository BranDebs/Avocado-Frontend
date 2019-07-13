import React from 'react';
import './Timer.css'

const Selections = (props) => {
  const onClickFunc = (e) => {
    console.log(e.currentTarget.parentNode);

    // Sets all collections to not be active
    let nodes = e.currentTarget.parentNode.childNodes;

    nodes.forEach(node => {
      node.className="tab col s3";
    });

    switch (e.currentTarget.name) {
      case "avocadoro":
        props.setTimerFunc(1500);
        break;
      case "short_break":
        props.setTimerFunc(300);
        break;
      case "long_break":
        props.setTimerFunc(900);
        break;
      default:
        props.setTimerFunc(0);
        return;
    }
    e.currentTarget.className = "tab col s3 active-tab";
    props.setTimerToggleFunc(true);
  }


  return (
    // Find ways to make this inline
      <div class="row">
        <div class="col s12">
          <div class="card-tabs">
            <div className="tabs cursor-pointer z-depth-2">
              <div className="timer-tab">
                <a className="tab col s3 active-tab" name="avocadoro" onClick={onClickFunc}>Avocadoro</a>
                <a className="tab col s3" name="short_break" onClick={onClickFunc}>Short Break</a>
                <a className="tab col s3" name="long_break" onClick={onClickFunc}>Long Break</a>
                <a href="#!" className="tab col s3">Settings</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Selections;
