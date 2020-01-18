import { ADD_TODO, START_TODO } from './actionTypes';

export function addTodo() {
  return {
    type: ADD_TODO,
    todo: {
      id: Date.now(),
      title: ''
    }
  };
}

export function startTodo(id) {
  return {
    type: START_TODO,
    id: id
  };
}
