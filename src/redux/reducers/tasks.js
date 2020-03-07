import {
  ADD_TODOS,
  ADD_IN_PROGRESS,
  ADD_COMPLETED,
  ARCHIVE_COMPLETED,
  EDIT_TASK,
  DELETE_TASK,
  EDIT_TASK_MODE
} from 'redux/actions/actionTypes';

import { TASK_IN_PROGRESS, TASK_COMPLETED } from 'const/tasks';

const initialState = {
  tasks: [
    // id: number
    // title: string
    // editing: bool
    // type: string
  ]
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
      const newList = state.tasks.filter(task => task.id !== action.id);
      const toAdd = state.tasks.filter(task => task.id === action.id).shift();
      toAdd.type = TASK_IN_PROGRESS;
      return {
        ...state,
        tasks: [...newList, toAdd]
      };
    }
    case ADD_COMPLETED: {
      const newList = state.tasks.filter(task => task.id !== action.id);
      const toAdd = state.tasks.filter(task => task.id === action.id).shift();
      toAdd.type = TASK_COMPLETED;
      return {
        ...state,
        tasks: [...newList, toAdd]
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
        task.id === action.id ? { ...task, title: action.title } : task
      );
      return {
        ...state,
        tasks: [...newTasks]
      };
    }

    case EDIT_TASK_MODE: {
      const editTask = state.tasks.map(task =>
        task.id === action.id
          ? { ...task, editing: action.editing }
          : { ...task, editing: false }
      );
      return {
        ...state,
        tasks: [...editTask]
      };
    }

    case DELETE_TASK: {
      const newTasks = state.tasks.filter(task => task.id !== action.id);
      return {
        ...state,
        tasks: [...newTasks]
      };
    }

    default:
      return state;
  }
}
