import { SETTINGS_TOGGLE } from 'redux/actions/actionTypes';

const initialState = {
  active: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_TOGGLE:
      return {
        ...state,
        active: !state.active
      };
    default:
      return state;
  }
}
