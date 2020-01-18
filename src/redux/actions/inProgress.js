import {
  ADD_IN_PROGRESS,
  FINISH_IN_PROGRESS,
  DELETE_IN_PROGRESS
} from './actionTypes';

export function addInProgress(id, title) {
  return {
    type: ADD_IN_PROGRESS,
    inprogress: {
      id: id,
      title: title
    }
  };
}

export function deleteInProgress(id) {
  return {
    type: DELETE_IN_PROGRESS,
    id: id
  };
}
