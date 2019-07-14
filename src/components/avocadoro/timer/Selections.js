import React from 'react';
import './Timer.css'

const Selections = (props) => {
  const onClickFunc = (e) => {
    console.log(e.currentTarget.parentNode);

    // Sets all collections to not be active
    let nodes = e.currentTarget.parentNode.childNodes;

    nodes.forEach(node => {
      node.className="tab white-text";
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
