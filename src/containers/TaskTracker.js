import { connect } from 'react-redux';

import TaskTracker from 'components/TaskTracker';

import {
  addTodos,
  addInProgress,
  addCompleted,
  archiveCompleted,
  deleteTask,
  editTaskMode
} from 'redux/actions/tasks';

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    todosActions: {
      onAdd: () => {
        const id = Date.now();
        dispatch(addTodos(id));
        dispatch(editTaskMode(id, true));
      },
      onClick: id => {
        dispatch(addInProgress(id));
      }
    },
    inprogressActions: {
      onClick: id => {
        dispatch(addCompleted(id));
      }
    },
    completedActions: {
      onClick: id => {
        dispatch(archiveCompleted(id));
        dispatch(deleteTask(id));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTracker);
