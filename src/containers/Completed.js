import { connect } from 'react-redux';
import {editCompletedTitle} from 'redux/actions/taskCard';
import Completed from 'components/dashboard/todo/Completed';

const mapStateToProps = (state, ownProps) => {
  return {
    completed: state.completedlist.completed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCompleted: (id, title) => dispatch(editCompletedTitle(id, title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Completed);
