import { ADD_IN_PROGRESS, FINISH_IN_PROGRESS } from './actionTypes';

export function addInProgress(id, title) {
  return {
    type: ADD_IN_PROGRESS,
    inprogress: {
      id: id,
      title: title
    }
  };
}

export function finishInProgress(id) {
  return {
    type: FINISH_IN_PROGRESS,
    id: id
  };
}
