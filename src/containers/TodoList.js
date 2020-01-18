import { connect } from 'react-redux';
import { addTodo } from 'redux/actions/todoList';
import {editTodoTitle} from 'redux/actions/taskCard';
import TodoList from 'components/dashboard/todo/TodoList';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todolist.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: () => dispatch(addTodo()),
    editTodo: (id, title) => dispatch(editTodoTitle(id, title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
