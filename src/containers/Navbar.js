import { connect } from 'react-redux';

import { toggleSettings } from 'redux/actions/settings';
import Navbar from 'components/Navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings,
    timer: state.timer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSettings: active => dispatch(toggleSettings(active))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
