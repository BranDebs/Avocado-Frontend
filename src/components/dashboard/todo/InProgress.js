import React from 'react';
import TaskCard from './TaskCard';
import './Todo.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import CardContent from '@material-ui/core/CardContent';
import { IN_PROGRESS } from 'const/Task';
import { UiConst } from 'const/UiConst';
import { makeStyles } from '@material-ui/core/styles';

const InProgress = ({
  inprogress,
  editInProgress,
  finishInProgress,
  deleteInProgress
}) => {
  const inprogressList = inprogress.map(todo => (
    <TaskCard
      key={todo.id}
      id={todo.id}
      title={todo.title}
      onEditTitle={editInProgress}
      onTaskClick={finishInProgress}
      onDelete={deleteInProgress}
      btnType={IN_PROGRESS}
    />
  ));

  const useStyles = makeStyles(theme => ({
    root: {
      minWidth: UiConst.CARD_MIN_WIDTH
    }
  }));
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid item>
          <div className={'task-title'}>
            <Typography variant="h6">In Progress</Typography>
          </div>
          <div>
            <List>{inprogressList}</List>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InProgress;
