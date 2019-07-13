import React from 'react';

const TaskCard = () => {
  function onHover(e) {
    console.log("Got to change colour here")
  }
  function onOut(e) {
    console.log("Got to change back to default colour")
  }
  return(
    <div className="card blue-grey darken-1" onMouseOver={() => onHover()} onMouseOut={() => onOut()}>
      <div className="card-content white-text">
        <span className="card-title">Card Title</span>
        <p>lorem ipsum</p>
      </div>
    </div>
  )
};

export default TaskCard;
