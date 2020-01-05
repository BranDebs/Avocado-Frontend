import { connect } from 'react-redux';
import { toggleSettings } from 'redux/actions/settings';
import Settings from 'components/settings/SettingsModal';

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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
