import React from 'react';
import TodoList from './TodoList';
import InProgress from './InProgress';
import Completed from './Completed';

const Todo = () => {
  return(
    <div>
      <InProgress/>
      <TodoList/>
      <Completed/>
    </div>
  );
};

export default Todo;
