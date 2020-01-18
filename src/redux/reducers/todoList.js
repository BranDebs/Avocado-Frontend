import { ADD_TODO, EDIT_TODO_TITLE } from 'redux/actions/actionTypes';

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
      const newTodos = state.todos.map(
        todo => todo.id === action.id ? {id: todo.id, title: action.title} : todo
      )
      return {
        ...state,
        todos: [...newTodos]
      };
    default:
      return state;
  }
}
