import { ADD_COMPLETED } from './actionTypes';

export function addCompleted(id, title) {
  return {
    type: ADD_COMPLETED,
    completed: {
      id: id,
      title: title
    }
  };
}
