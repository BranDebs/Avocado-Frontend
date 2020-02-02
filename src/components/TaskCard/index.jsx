import React, { useState } from 'react';

import {
  TASK_TODOS,
  TASK_IN_PROGRESS,
  TASK_COMPLETED,

  Start,
  Finish,
  Archive
} from 'const/tasks'

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FONT_S } from 'const/Font';

const defaultStyle = {
  card: 'card blue-grey darken-1',
  shadow: 1
};

const hoveredStyle = {
  card: 'card green darken-3',
  shadow: 3
};

const TaskCard = ({
  id,
  type,
  title,
  onTaskClick,
  onEdit,
  onDelete
}) => {
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
    onEdit(id, e.target.value);
  };

  const showTaskCard = () => {
    if (isEdit) {
      return (
        <TextField
          onChange={handleTextChange}
          defaultValue={title}
          multiline={true}
          InputProps={{
            classes: {
              input: classes.textBoxStyle
            }
          }}
          variant={'outlined'}
        >
          {title}
        </TextField>
      );
    } else {
      return (
        <Typography align="left" className={classes.overflow}>
          {title}
        </Typography>
      );
    }
  };

  const useStyles = makeStyles(theme => ({
    buttonStyle: {
      maxHeight: 20,
      maxWidth: 60,
      minWidth: 60,
      minHeight: 20,
      fontSize: 10
    },
    iconSize: {
      fontSize: 16,
      float: 'right'
    },
    overflow: {
      overflowWrap: 'break-word',
      padding: '10px',
      fontSize: FONT_S
    },
    cardStyle: {
      width: 'inherit',
      marginBottom: 10,
      paddingTop: 5,
      paddingBottom: 5
    },
    textBoxStyle: {
      fontSize: FONT_S
    }
  }));
  const classes = useStyles();

  return (
    <Card className={classes.cardStyle}>
      <Grid container spacing={0} padding={0}>
        <Grid item xs={8}>
          {showTaskCard()}
        </Grid>
        <Grid item xs={4}>
          <IconButton component="span" onClick={handleIsEdit}>
            <EditIcon className={classes.iconSize} />
          </IconButton>
          <IconButton component="span" onClick={() => onDelete(id)}>
            <DeleteIcon className={classes.iconSize} />
          </IconButton>
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              component="span"
              className={classes.buttonStyle}
              onClick={() => onTaskClick(id, title)}
            >
              {getTaskButton(type)}
            </Button>
          </label>
        </Grid>
      </Grid>
    </Card>
  );
};

const getTaskButton = (type) => {
  switch(type) {
    case TASK_TODOS:
      return Start;
    case TASK_IN_PROGRESS:
      return Finish;
    case TASK_COMPLETED:
      return Archive;
  }
  throw "invalid task type";
}

export default TaskCard;
