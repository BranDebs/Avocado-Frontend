import React from 'react';
import TodoCard from './TodoCard';
import Box from "@material-ui/core/Box";

const Completed = () => {
  return(
    <div>
        <Box component={"span"} bgcolor="background.paper">
            Completed
        </Box>
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
    </div>
  );
};

export default Completed;
