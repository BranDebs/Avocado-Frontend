import { connect } from 'react-redux';
import Timer from 'components/timer/Timer';

const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings
  };
};

export default connect(mapStateToProps, {})(Timer);
