import React, {useState} from 'react';
import TodoCard from './TodoCard';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";

const TodoList = (props) => {
  const [todoTasks, setTodoTasks] = useState(props.todoTasks)
  const onClickFunc = (e) => {
    const currentTodo = props.todoTasks
    const id = currentTodo.length
    const todo = {id: id, content:"hello"}
    props.addTodo([...currentTodo, todo])
    setTodoTasks([...todoTasks, todo])
  }

  const showTodoList = todoTasks.map(todo => <TodoCard key={todo.id}/>)
  return(
    <div>
      <Box component={"span"} bgcolor="background.paper">Todo
        {/*<a className="btn-floating btn-small waves-effect waves-light red" onClick={onClickFunc}><i className="material-icons">add</i></a>*/}
        <Fab color="primary" aria-label="add">
          <AddIcon onClick={onClickFunc}/>
        </Fab>
      </Box>
      {showTodoList}
    </div>
  );
};

export default TodoList;
