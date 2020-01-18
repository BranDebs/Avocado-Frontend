import { EDIT_IN_PROGRESS_TITLE } from 'redux/actions/actionTypes';

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
      const updatedInProgress = state.inprogress.map(todo =>
        todo.id === action.id ? { id: todo.id, title: action.title } : todo
      );
      return {
        ...state,
        inprogress: [...updatedInProgress]
      };
    default:
      return state;
  }
}
