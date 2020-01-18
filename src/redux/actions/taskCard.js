import {
  EDIT_TODO_TITLE,
  EDIT_IN_PROGRESS_TITLE,
  EDIT_COMPLETED_TITLE,
  DELETE_TODO,
  DELETE_IN_PROGRESS,
  DELETE_COMPLETED
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

function editTaskTitle(editList, id, title) {
  return {
    type: editList,
    id: id,
    title: title
  };
}

export function deleteTodo(id) {
  return deleteTaskTitle(DELETE_TODO, id);
}

export function deleteInProgress(id) {
  return deleteTaskTitle(DELETE_IN_PROGRESS, id);
}

export function deleteCompleted(id) {
  return deleteTaskTitle(DELETE_COMPLETED, id);
}

function deleteTaskTitle(delList, id) {
  return {
    type: delList,
    id: id
  };
}
