import { connect } from 'react-redux';
import { addTodo, startTodo } from 'redux/actions/todoList';
import { addInProgress } from 'redux/actions/inProgress';
import { editTodoTitle } from 'redux/actions/taskCard';
import TodoList from 'components/dashboard/todo/TodoList';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todolist.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: () => dispatch(addTodo()),
    editTodo: (id, title) => dispatch(editTodoTitle(id, title)),
    startTodo: (id, title) => {
      dispatch(startTodo(id));
      dispatch(addInProgress(id, title));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
