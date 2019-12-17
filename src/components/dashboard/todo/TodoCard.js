import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

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
  function onHover(e) {
    console.log('Got to change colour here');
    setHoverStyle(hoveredStyle);
  }
  function onOut(e) {
    console.log('Got to change back to default colour');
    setHoverStyle(defaultStyle);
  }

  return (
    <Card>
      <CardContent>
        <IconButton component="span" style={{ flex: 1 }}>
          <EditIcon fontSize={'small'} />
        </IconButton>
        <Typography>Lorem ipsummmmmie</Typography>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
