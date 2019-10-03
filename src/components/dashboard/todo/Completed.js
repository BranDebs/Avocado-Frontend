import React from 'react';
import TodoCard from './TodoCard';

const Completed = () => {
  return(
    <div>
      <span>Completed</span>
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
    </div>
  );
};

export default Completed;
