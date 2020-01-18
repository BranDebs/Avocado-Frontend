import { ADD_TODO } from './actionTypes';

export function addTodo() {
  return {
    type: ADD_TODO,
    todo: {
      id: Date.now()
    }
  };
}
