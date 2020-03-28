import { connect } from 'react-redux';
import Timer from 'components/Timer';
import { addAvocount } from 'redux/actions/timer';

const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings.settings,
    timer: state.timer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAvocount: () => {
      dispatch(addAvocount());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
