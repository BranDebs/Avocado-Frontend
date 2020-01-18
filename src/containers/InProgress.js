import { connect } from 'react-redux';
import { editInProgressTitle } from 'redux/actions/taskCard';
import { finishInProgress } from 'redux/actions/inProgress';
import { addCompleted } from 'redux/actions/completed';

import InProgress from 'components/dashboard/todo/InProgress';

const mapStateToProps = (state, ownProps) => {
  return {
    inprogress: state.inprogresslist.inprogress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editInProgress: (id, title) => dispatch(editInProgressTitle(id, title)),
    finishInProgress: (id, title) => {
      dispatch(finishInProgress(id));
      dispatch(addCompleted(id, title));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InProgress);
