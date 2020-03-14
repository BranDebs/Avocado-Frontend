import { connect } from 'react-redux';
import Timer from 'components/Timer';

const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings.settings
  };
};

export default connect(mapStateToProps, {})(Timer);
