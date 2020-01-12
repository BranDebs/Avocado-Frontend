import { SETTINGS_TOGGLE } from 'redux/actions/actionTypes';

export function toggleSettings(active) {
  return {
    type: SETTINGS_TOGGLE,
    active
  };
}
