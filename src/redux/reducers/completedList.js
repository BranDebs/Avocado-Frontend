import { EDIT_COMPLETED_TITLE, ADD_COMPLETED } from 'redux/actions/actionTypes';

const initialState = {
  completed: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_COMPLETED_TITLE: {
      const newCompleted = state.completed.map(todo =>
        todo.id === action.id ? { id: todo.id, title: action.title } : todo
      );
      return {
        ...state,
        completed: [...newCompleted]
      };
    }
    case ADD_COMPLETED: {
      return {
        ...state,
        completed: [...state.completed, action.completed]
      };
    }
    default:
      return state;
  }
}
