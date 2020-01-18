import { combineReducers } from 'redux';
import settings from 'redux/reducers/settings';
import todolist from 'redux/reducers/todoList';
export default combineReducers({ settings, todolist});
