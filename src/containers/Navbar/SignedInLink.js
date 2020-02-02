import { connect } from 'react-redux';

import { toggleSettings } from 'redux/actions/settings';
import SignedInLink from 'components/Navbar/SignedInLink';

const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSettings: active => dispatch(toggleSettings(active))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLink);
