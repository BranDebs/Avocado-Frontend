import { ADD_TODO } from 'redux/actions/actionTypes';

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
    default:
      return state;
  }
}
