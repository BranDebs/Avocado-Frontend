import {
  EDIT_IN_PROGRESS_TITLE,
  ADD_IN_PROGRESS
} from 'redux/actions/actionTypes';
import { FINISH_IN_PROGRESS } from '../actions/actionTypes';

const initialState = {
  inprogress: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_IN_PROGRESS_TITLE: {
      const newInProgress = state.inprogress.map(todo =>
        todo.id === action.id ? { id: todo.id, title: action.title } : todo
      );
      return {
        ...state,
        inprogress: [...newInProgress]
      };
    }
    case ADD_IN_PROGRESS:
      return {
        ...state,
        inprogress: [...state.inprogress, action.inprogress]
      };
    case FINISH_IN_PROGRESS: {
      const newInProgress = state.inprogress.filter(
        todo => todo.id !== action.id
      );
      return {
        ...state,
        inprogress: [...newInProgress]
      };
    }
    default:
      return state;
  }
}
