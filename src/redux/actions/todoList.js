import { ADD_TODO, EDIT_TODO_TITLE } from './actionTypes';

export function addTodo() {
  return {
    type: ADD_TODO,
    todo: {
      id: Date.now(),
      title: ''
    }
  };
};
