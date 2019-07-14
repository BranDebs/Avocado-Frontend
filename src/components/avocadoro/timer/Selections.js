import React from 'react';

const AVOCADORO_TIMER = 1500;
const SHORT_BREAK_TIMER = 300;
const LONG_BREAK_TIMER = 900;

const Selections = (props) => {
  const onClickFunc = (e) => {
    // Sets all collections to not be active
    let nodes = e.currentTarget.parentNode.childNodes;

    nodes.forEach(node => {
      node.className="collection-item";
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
    e.currentTarget.className = "collection-item active";
    props.setTimerToggleFunc(true);
  }

  return (
    // Find ways to make this inline
    <div className="collection">
      <a className="collection-item active" name="avocadoro" onClick={onClickFunc}>Avocadoro</a>
      <a className="collection-item" name="short_break" onClick={onClickFunc}>Short Break</a>
      <a className="collection-item" name="long_break" onClick={onClickFunc}>Long Break</a>
      <a href="#!" className="collection-item">Settings</a>
    </div>
  );
}

export default Selections;
