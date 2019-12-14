import React, {useState} from 'react';
import TodoCard from './TodoCard';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

const TodoList = (props) => {
  const [todoTasks, setTodoTasks] = useState(props.todoTasks)
  const onClickFunc = (e) => {
    const currentTodo = props.todoTasks
    const id = currentTodo.length
    const todo = {id: id, content:"hello"}
    props.addTodo([...currentTodo, todo])
    setTodoTasks([...todoTasks, todo])
  }

  const showTodoList = todoTasks.map(todo => <List><TodoCard key={todo.id}/></List>)
  return(
      <Card>
        <CardContent>
          <Grid item justify="flex">
            <div className={"task-title"}>
              <Typography variant="h6" display={"inline"} style={{ flex: 1 }}>
                Todo
              </Typography>
              <Fab color="primary" aria-label="add" size={"small"}>
                <AddIcon onClick={onClickFunc}/>
              </Fab>
            </div>
            <div>
                {showTodoList}
            </div>
          </Grid>
        </CardContent>
      </Card>
  );
};

export default TodoList;
