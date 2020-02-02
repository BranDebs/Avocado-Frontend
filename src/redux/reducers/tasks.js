import {
  ADD_TODOS,
  ADD_IN_PROGRESS,
  ADD_COMPLETED,
  ARCHIVE_COMPLETED,

  EDIT_TASK,
  DELETE_TASK
} from 'redux/actions/actionTypes';

import {
  TASK_IN_PROGRESS,
  TASK_COMPLETED
} from 'const/tasks'
import { TaskList } from '../../components/TaskTracker/TaskList';

const initialState = {
  tasks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODOS: {
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };
    }
    case ADD_IN_PROGRESS: {
      const newList = state.tasks.map(task =>
        task.id === action.id ? {...task, type: TASK_IN_PROGRESS} : task
      );
      return {
        ...state,
        tasks: [...newList]
      };
    }
    case ADD_COMPLETED: {
      const newList = state.tasks.map(task =>
        task.id === action.id ? {...task, type: TASK_COMPLETED} : task
      );
      return {
        ...state,
        tasks: [...newList]
      };
    }
    case ARCHIVE_COMPLETED: {
      // Store into some archive storage
      // ... pseudocode
      console.log(
        'Archived task id(',
        action.id,
        ') title(',
        action.title,
        ')'
      );
      return {
        ...state
      };
    }

    case EDIT_TASK: {
      const newTasks = state.tasks.map(task =>
        task.id === action.id ? {...task, title: action.title} : task
      );
      return {
        ...state,
        tasks: [...newTasks]
      }
    }

    case DELETE_TASK: {
      const newTasks = state.tasks.filter(task => task.id !== action.id);
      return {
        ...state,
        tasks: [...newTasks]
      }
    }

    default:
      return state;
  }
}
