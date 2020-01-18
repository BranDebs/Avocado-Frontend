import {EDIT_TODO_TITLE} from './actionTypes'

export function editTodoTitle(id, title) {
  return editTaskTitle(EDIT_TODO_TITLE, id, title)
};


function editTaskTitle(listType, id, title) {
  return {
    type: listType,
    id: id,
    title: title
  }
}
