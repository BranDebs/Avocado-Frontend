import {
  EDIT_TODO_TITLE,
  EDIT_IN_PROGRESS_TITLE,
  EDIT_COMPLETED_TITLE
} from './actionTypes';

export function editTodoTitle(id, title) {
  return editTaskTitle(EDIT_TODO_TITLE, id, title);
}

export function editInProgressTitle(id, title) {
  return editTaskTitle(EDIT_IN_PROGRESS_TITLE, id, title);
}

export function editCompletedTitle(id, title) {
  return editTaskTitle(EDIT_COMPLETED_TITLE, id, title);
}

function editTaskTitle(listType, id, title) {
  return {
    type: listType,
    id: id,
    title: title
  };
}
