import { combineReducers } from 'redux';
import settings from 'redux/reducers/settings';
import todolist from 'redux/reducers/todoList';
import inprogresslist from 'redux/reducers/inProgressList';
import completedlist from 'redux/reducers/completedList';

export default combineReducers({
  settings,
  todolist,
  inprogresslist,
  completedlist
});
