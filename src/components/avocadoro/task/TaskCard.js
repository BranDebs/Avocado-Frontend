import React from 'react';

const TaskCard = () => {
  function onHover(e) {
    console.log("Got to change colour here")
  }
  function onOut(e) {
    console.log("Got to change back to default colour")
  }
  return(
    <div className={cardColour} onMouseOver={onHover} onMouseOut={onOut}>
      <span className="card-title">Card Title</span>
      <p>lorem ipsum</p>
    </div>
  )
};

export default TaskCard;
