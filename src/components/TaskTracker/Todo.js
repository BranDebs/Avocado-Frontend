import React, { useState } from 'react';
import TodoList from 'containers/TodoList';
import InProgress from 'containers/InProgress';
import Completed from 'containers/Completed';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const Todo = props => {
  const [todoTasks, addTodo] = useState([]);
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={4}>
        <TodoList />
      </Grid>
      <Grid item xs={4}>
        <InProgress />
      </Grid>
      <Grid item xs={4}>
        <Completed />
      </Grid>
    </Grid>
  );
};

export default Todo;
