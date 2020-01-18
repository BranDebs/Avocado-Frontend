import { connect } from 'react-redux';
import { addTodo } from 'redux/actions/todoList';
import TodoList from 'components/dashboard/todo/TodoList';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todolist.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: () => dispatch(addTodo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
