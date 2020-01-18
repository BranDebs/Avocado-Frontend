import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import todo from './Todo.css';
import { makeStyles } from '@material-ui/core/styles';

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
  };

  const handleTextChange = e => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const showTodoCard = () => {
    if (isEdit) {
      return (
        <Typography>
          <TextField
            onChange={handleTextChange}
            defaultValue={text}
            multiline={true}
          >
            {text}
          </TextField>
        </Typography>
      );
    } else {
      return <Typography className={classes.overflow}>{text}</Typography>;
    }
  };

  const useStyles = makeStyles(theme => ({
    cardStyle: {
      paddingTop: 0,
      paddingRight: 5
    },
    buttonStyle: {
      maxHeight: 20,
      maxWidth: 60,
      minWidth: 60,
      minHeight: 20,
      fontSize: 10,
      float: 'right'
    },
    iconSize: {
      fontSize: 16,
      float: 'right'
    },
    overflow: {
      overflowWrap: 'break-word'
    }
  }));
  const classes = useStyles();

  return (
    <Card style={{ width: 'inherit' }}>
      <CardContent className={classes.cardStyle}>
        <IconButton component="span" style={{ flex: 1 }} onClick={handleIsEdit}>
          <EditIcon className={classes.iconSize} />
        </IconButton>
        <IconButton component="span" style={{ flex: 1 }}>
          <DeleteIcon className={classes.iconSize} />
        </IconButton>
        {showTodoCard()}
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            component="span"
            align={'right'}
            className={classes.buttonStyle}
          >
            Archive
          </Button>
        </label>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
