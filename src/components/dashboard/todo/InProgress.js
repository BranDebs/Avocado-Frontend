import React from 'react';
import TodoCard from './TodoCard';

const InProgress = () => {
  return(
    <div>
      <span>In Progress</span>
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
    </div>
  );
};

export default InProgress;
