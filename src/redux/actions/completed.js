import {
  ADD_COMPLETED,
  ARCHIVE_COMPLETED,
  DELETE_COMPLETED
} from './actionTypes';

export function addCompleted(id, title) {
  return {
    type: ADD_COMPLETED,
    completed: {
      id: id,
      title: title
    }
  };
}

export function archiveCompleted(id, title) {
  return {
    type: ARCHIVE_COMPLETED,
    id: id,
    title: title
  };
}

export function deleteCompleted(id) {
  return {
    type: DELETE_COMPLETED,
    id: id
  };
}
