import { connect } from 'react-redux';
import { editInProgressTitle } from 'redux/actions/taskCard';
import { deleteInProgress } from 'redux/actions/inProgress';
import { addCompleted } from 'redux/actions/completed';

import InProgress from 'components/dashboard/todo/InProgress';
import { deleteTodo } from '../redux/actions/taskCard';

const mapStateToProps = (state, ownProps) => {
  return {
    inprogress: state.inprogresslist.inprogress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editInProgress: (id, title) => dispatch(editInProgressTitle(id, title)),
    finishInProgress: (id, title) => {
      dispatch(addCompleted(id, title));
      dispatch(deleteInProgress(id));
    },
    deleteInProgress: id => dispatch(deleteInProgress(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InProgress);
