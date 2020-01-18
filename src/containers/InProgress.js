import { connect } from 'react-redux';
import { editInProgressTitle } from 'redux/actions/taskCard';
import InProgress from 'components/dashboard/todo/InProgress';

const mapStateToProps = (state, ownProps) => {
  return {
    inprogress: state.inprogresslist.inprogress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editInProgress: (id, title) => dispatch(editInProgressTitle(id, title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InProgress);
