import { connect } from 'react-redux';
import { editCompletedTitle } from 'redux/actions/taskCard';
import { archiveCompleted, deleteCompleted } from 'redux/actions/completed';
import Completed from 'components/dashboard/todo/Completed';

const mapStateToProps = (state, ownProps) => {
  return {
    completed: state.completedlist.completed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCompleted: (id, title) => dispatch(editCompletedTitle(id, title)),
    archiveCompleted: (id, title) => {
      dispatch(archiveCompleted(id, title));
      dispatch(deleteCompleted(id))
    },
    deleteCompleted: id => dispatch(deleteCompleted(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Completed);
