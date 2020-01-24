import { SETTINGS_TOGGLE, SETTINGS_SAVE } from 'redux/actions/actionTypes';
import { TimeConst } from 'const/Timer';
import { secondsToMinutes } from 'utils/timerUtil';

const initialState = {
  active: false,
  settings: {
    avocadoDur: secondsToMinutes(TimeConst.AVOCADORO_TIME),
    shortBreakDur: secondsToMinutes(TimeConst.SHORT_BREAK_TIME),
    longBreakDur: secondsToMinutes(TimeConst.LONG_BREAK_TIME),
    autoStartBreak: true,
    autoStartAvocadoro: true,
    audio: true,
    notification: true,
    goal: 3
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_TOGGLE:
      return {
        ...state,
        active: !state.active
      };
    case SETTINGS_SAVE: {
      const newSettings = {
        ...state.settings,
        ...action.settings
      };
      return {
        ...state,
        settings: newSettings
      };
    }
    default:
      return state;
  }
}
