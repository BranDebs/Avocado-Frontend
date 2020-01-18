import {
  EDIT_IN_PROGRESS_TITLE,
  ADD_IN_PROGRESS
} from 'redux/actions/actionTypes';

const initialState = {
  inprogress: [
    {
      id: Date.now(),
      title: 'inprogress1'
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_IN_PROGRESS_TITLE:
      const newInProgress = state.inprogress.map(todo =>
        todo.id === action.id ? { id: todo.id, title: action.title } : todo
      );
      return {
        ...state,
        inprogress: [...newInProgress]
      };
    case ADD_IN_PROGRESS:
      return {
        ...state,
        inprogress: [...state.inprogress, action.inprogress]
      };
    default:
      return state;
  }
}
