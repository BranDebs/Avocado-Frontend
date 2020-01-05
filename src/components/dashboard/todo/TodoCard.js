import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';

const defaultStyle = {
  card: 'card blue-grey darken-1',
  content: 'card-content white-text'
};

const hoveredStyle = {
  card: 'card green darken-3',
  content: 'card-content white-text'
};

const TodoCard = () => {
  const [hoverStyle, setHoverStyle] = useState(defaultStyle);
  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  function onHover(e) {
    console.log('Got to change colour here');
    setHoverStyle(hoveredStyle);
  }
  function onOut(e) {
    console.log('Got to change back to default colour');
    setHoverStyle(defaultStyle);
  }

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
    console.log('hi')
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value)
  }

  const showTodoCard = () => {
    if (isEdit) {
      return (<Typography><TextField onChange={handleTextChange} defaultValue={text}>{text}</TextField></Typography>)
    } else {
      return (<Typography>{text}</Typography>)
    }
  };
  return (
    <Card>
      <CardContent>
        <IconButton component="span" style={{ flex: 1 }} onClick={handleIsEdit}>
          <EditIcon fontSize={'small'}/>
        </IconButton>
        <IconButton component="span" style={{ flex: 1 }}>
          <DeleteIcon fontSize={'small'}/>
        </IconButton>
            {showTodoCard()}
      </CardContent>
    </Card>
  );
};

export default TodoCard;
