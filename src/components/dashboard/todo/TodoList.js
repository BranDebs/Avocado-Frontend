import React, { useState } from 'react';
import TaskCard from './TaskCard';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { TODO } from 'const/Task';

const TodoList = ({ todos, addTodo, editTodo, startTodo }) => {
  const todoList = todos.map(todo => (
    <TaskCard
      key={todo.id}
      id={todo.id}
      title={todo.title}
      onEditTitle={editTodo}
      onTaskClick={startTodo}
      btnType={TODO}
    />
  ));
  return (
    <Card>
      <CardContent>
        <Grid item>
          <div className={'task-title'}>
            <Typography variant="h6" display={'inline'} style={{ flex: 1 }}>
              Todo
            </Typography>
            <Fab color="primary" aria-label="add" size={'small'}>
              <AddIcon onClick={addTodo} />
            </Fab>
          </div>
          <div>
            <List>{todoList}</List>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TodoList;
