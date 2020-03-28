import { INCREMENT_AVOCOUNT } from 'redux/actions/actionTypes';

const initialState = {
  avocount: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_AVOCOUNT:
      return {
        ...state,
        avocount: state.avocount + 1
      };
    default:
      return state;
  }
}
