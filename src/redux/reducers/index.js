import { combineReducers } from 'redux';
import settings from './settings';
import tasks from './tasks';
import timer from './timer';

export default combineReducers({
  settings,
  tasks,
  timer
});
