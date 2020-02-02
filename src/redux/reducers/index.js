import { combineReducers } from 'redux';
import settings from './settings';
import tasks from './tasks'

export default combineReducers({
  settings,
  tasks
});
