import React from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  return(
    <div>
      <span>Todo</span>
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
    </div>
  );
};

export default TodoList;
