import React from 'react';
import Task from './Task';
import InProgress from './InProgress';
import Completed from './Completed';

const TaskList = () => {
  return(
    <div>
      <InProgress/>
      <Task/>
      <Completed/>
    </div>
  );
};

export default TaskList;
