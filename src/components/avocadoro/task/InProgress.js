import React from 'react';
import TaskCard from './TaskCard';

const InProgress = () => {
  return(
    <div>
      <span>In Progress</span>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
    </div>
  );
};

export default InProgress;
