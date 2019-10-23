import React, {useState} from 'react';
import TodoList from './TodoList';
import InProgress from './InProgress';
import Completed from './Completed';

const Todo = () => {
  const [todoTasks, addTodo] = useState([]);
  return(
    <div>
      <InProgress/>
      <TodoList todoTasks={todoTasks} addTodo={addTodo}/>
      <Completed/>
    </div>
  );
};

export default Todo;
