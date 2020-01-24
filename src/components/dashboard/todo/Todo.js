import React, { useState } from 'react';
import TodoList from 'containers/TodoList';
import InProgress from 'containers/InProgress';
import Completed from 'containers/Completed';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const Todo = props => {
  const [todoTasks, addTodo] = useState([]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} wrap={'nowrap'}>
        <Grid item lg={4}>
          <TodoList />
        </Grid>
        <Grid item lg={4}>
          <InProgress />
        </Grid>
        <Grid item lg={4}>
          <Completed />
        </Grid>
      </Grid>
    </div>
  );
};

export default Todo;
