import React, {useState} from 'react';

const defaultStyle = {
  card: "card blue-grey darken-1",
  content: "card-content white-text",
}

const hoveredStyle = {
  card:"card green darken-3",
  content: "card-content white-text",
}

const TodoCard = () => {
  const [hoverStyle, setHoverStyle] = useState(defaultStyle)
  function onHover(e) {
    console.log("Got to change colour here")
    setHoverStyle(hoveredStyle)
  }
  function onOut(e) {
    console.log("Got to change back to default colour")
    setHoverStyle(defaultStyle)
  }
  return(
    <div className={hoverStyle.card} onMouseOver={() => onHover()} onMouseOut={() => onOut()}>
      <div className={hoverStyle.content}>
        <span className="card-title">Card Title</span>
        <p>lorem ipsum</p>
      </div>
    </div>
  )
};

export default TodoCard;
