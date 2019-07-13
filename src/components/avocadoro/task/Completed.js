import React from 'react';
import TaskCard from './TaskCard';

const Completed = () => {
  return(
    <div>
      <span>Completed</span>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
    </div>
  );
};

export default Completed;
