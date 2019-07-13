import React from 'react';

const Selections = (props) => {
  const onClickFunc = (e) => {
    console.log(e.currentTarget.parentNode);

    // Sets all collections to not be active
    let nodes = e.currentTarget.parentNode.childNodes;

    nodes.forEach(node => {
      node.className="collection-item";
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
