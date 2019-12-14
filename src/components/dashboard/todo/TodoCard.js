import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

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
        <Typography>Lorem ipsummmmmie</Typography>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
