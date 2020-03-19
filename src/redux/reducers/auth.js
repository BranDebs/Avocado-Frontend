import { LOGIN_USER, LOGOUT_USER } from 'redux/actions/actionTypes';

const initialState = {
  isLoggedIn: true,
  loginTime: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        loginTime: new Date().toISOString()
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        loginTime: null
      };
    default:
      return state;
  }
}
