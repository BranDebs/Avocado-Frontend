import { connect } from 'react-redux';
import { toggleSettings } from 'redux/actions/settings';
import Settings from 'components/SettingsModal';
import { saveSettings } from 'redux/actions/settings';

const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSettings: active => dispatch(toggleSettings(active)),
    onSave: settings => {
      dispatch(saveSettings(settings));
      dispatch(toggleSettings(false));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
