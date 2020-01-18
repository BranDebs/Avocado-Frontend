import {
  ADD_TODO,
  EDIT_TODO_TITLE,
  START_TODO,
  DELETE_TODO
} from 'redux/actions/actionTypes';

const initialState = {
  todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case EDIT_TODO_TITLE:
      // Look for the todo that we want to change
      const editTodos = state.todos.map(todo =>
        todo.id === action.id ? { id: todo.id, title: action.title } : todo
      );
      return {
        ...state,
        todos: [...editTodos]
      };
    case START_TODO:
      // Remove from the todo list
      const startTodos = state.todos.filter(todo => todo.id !== action.id);
      return {
        ...state,
        todos: [...startTodos]
      };
    case DELETE_TODO: {
      // Remove from the todo list
      const newTodos = state.todos.filter(todo => todo.id !== action.id);
      return {
        ...state,
        todos: [...newTodos]
      };
    }
    default:
      return state;
  }
}
