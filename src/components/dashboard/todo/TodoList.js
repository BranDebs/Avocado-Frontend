import React, {useState} from 'react';
import TodoCard from './TodoCard';

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
      <span>Todo  
        <a className="btn-floating btn-small waves-effect waves-light red" onClick={onClickFunc}><i className="material-icons">add</i></a>
      </span>
      {showTodoList}
    </div>
  );
};

export default TodoList;
