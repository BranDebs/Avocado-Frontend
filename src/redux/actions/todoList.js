import { ADD_TODO, START_TODO, DELETE_TODO } from './actionTypes';

export function addTodo() {
  return {
    type: ADD_TODO,
    todo: {
      id: Date.now(),
      title: ''
    }
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id: id
  };
}
