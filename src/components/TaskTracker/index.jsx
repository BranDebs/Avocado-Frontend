import React from 'react';

import TaskList from 'components/TaskList';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { TASK_TODOS, TASK_IN_PROGRESS, TASK_COMPLETED } from 'const/tasks';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function({
  tasks,
  todosActions,
  inprogressActions,
  completedActions
}) {
  const classes = useStyles();

  const todos = tasks.filter(task => task.type === TASK_TODOS);
  const inprogress = tasks.filter(task => task.type === TASK_IN_PROGRESS);
  const completed = tasks.filter(task => task.type === TASK_COMPLETED);

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={4}>
        <TaskList tasks={todos} actions={todosActions} listName="Todo" />
      </Grid>
      <Grid item xs={4}>
        <TaskList
          tasks={inprogress}
          actions={inprogressActions}
          listName="In Progress"
        />
      </Grid>
      <Grid item xs={4}>
        <TaskList
          tasks={completed}
          actions={completedActions}
          listName="Completed"
        />
      </Grid>
    </Grid>
  );
}
