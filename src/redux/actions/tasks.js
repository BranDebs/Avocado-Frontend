import {
  ADD_TODOS,
  ADD_IN_PROGRESS,
  ADD_COMPLETED,
  ARCHIVE_COMPLETED,
  EDIT_TASK,
  DELETE_TASK
} from './actionTypes';

import { TASK_TODOS } from 'const/tasks';

export function editTaskTitle(id, title) {
  return {
    type: EDIT_TASK,
    id: id,
    title: title
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id: id
  };
}

export function addTodos() {
  return {
    type: ADD_TODOS,
    task: {
      id: Date.now(),
      title: '',
      isEdit: true,
      type: TASK_TODOS
    }
  };
}

export function addInProgress(id) {
  return {
    type: ADD_IN_PROGRESS,
    id: id
  };
}

export function addCompleted(id) {
  return {
    type: ADD_COMPLETED,
    id: id
  };
}

export function archiveCompleted(id) {
  return {
    type: ARCHIVE_COMPLETED,
    id: id
  };
}
