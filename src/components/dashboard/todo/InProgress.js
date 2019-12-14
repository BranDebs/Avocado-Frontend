import React from 'react';
import TodoCard from './TodoCard';
import Box from "@material-ui/core/Box";

const InProgress = () => {
  return(
    <div>
        <Box component={"span"} bgcolor="background.paper">
            In Progress
        </Box>
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
    </div>
  );
};

export default InProgress;
