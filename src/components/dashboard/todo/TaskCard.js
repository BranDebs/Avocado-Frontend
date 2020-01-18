import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {getTaskButton} from 'utils/taskUtil'

const defaultStyle = {
  card: 'card blue-grey darken-1',
  content: 'card-content white-text'
};

const hoveredStyle = {
  card: 'card green darken-3',
  content: 'card-content white-text'
};

const TaskCard = ({id, title, btnType, onEditTitle}) => {
  const [hoverStyle, setHoverStyle] = useState(defaultStyle);
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
    onEditTitle(id, e.target.value);
  };

  const showTaskCard = () => {
    if (isEdit) {
      return (
          <TextField
            onChange={handleTextChange}
            defaultValue={title}
            multiline={true}
          >
            {title}
          </TextField>
      );
    } else {
      return <Typography className={classes.overflow}>{title}</Typography>;
    }
  };

  const useStyles = makeStyles(theme => ({
    cardContentStyle: {
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
    },
    cardStyle: {
      width: 'inherit'
    }
  }));
  const classes = useStyles();



  return (
    <Card className={classes.cardStyle}>
      <CardContent className={classes.cardContentStyle}>
        <IconButton component="span" onClick={handleIsEdit}>
          <EditIcon className={classes.iconSize} />
        </IconButton>
        <IconButton component="span">
          <DeleteIcon className={classes.iconSize} />
        </IconButton>
        {showTaskCard()}
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            component="span"
            className={classes.buttonStyle}
          >
            {getTaskButton(btnType)}
          </Button>
        </label>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
