import { connect } from 'react-redux';

import TaskCard from 'components/TaskCard'

import {
  editTaskTitle,
  deleteTask
} from 'redux/actions/tasks'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEdit: (id, title) => dispatch(editTaskTitle(id, title)),
    onDelete: (id) => dispatch(deleteTask(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard)
