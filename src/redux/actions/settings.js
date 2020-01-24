import { SETTINGS_TOGGLE, SETTINGS_SAVE } from 'redux/actions/actionTypes';

export function toggleSettings(active) {
  return {
    type: SETTINGS_TOGGLE,
    active
  };
}

export function saveSettings(settings) {
  return {
    type: SETTINGS_SAVE,
    settings
  };
}
