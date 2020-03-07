import {
  ADD_TODOS,
  ADD_IN_PROGRESS,
  ADD_COMPLETED,
  ARCHIVE_COMPLETED,
  EDIT_TASK,
  DELETE_TASK,
  EDIT_TASK_MODE
} from './actionTypes';

import { TASK_TODOS } from 'const/tasks';

export function editTaskMode(id, isEditing) {
  return {
    type: EDIT_TASK_MODE,
    id: id,
    editing: isEditing
  };
}

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

export function addTodos(id) {
  return {
    type: ADD_TODOS,
    task: {
      id: id,
      title: '',
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
