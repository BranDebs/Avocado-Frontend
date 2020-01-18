import {EDIT_COMPLETED_TITLE} from 'redux/actions/actionTypes';

const initialState = {
  completed: [
    {
      id: Date.now(),
      title: "completed1"
    }
  ]
}

export default function(state = initialState, action){
  switch(action.type) {
    case EDIT_COMPLETED_TITLE:
      const updatedCompleted = state.completed.map (
        todo => todo.id === action.id ? {id: todo.id, title: action.title} : todo
      )
      return {
        ...state,
        completed: [...updatedCompleted]
      };
    default:
      return state
  };
};
