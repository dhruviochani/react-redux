import * as types from "./LoginTypes";

const INITIAL_STATE = { email : '', password : '', isLoggedIn: false};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_DATA_RECEIVE:
      return {
        ...state,
        ...action.payload
      };
      case types.LOGIN_USER_SAGA_SUCCESS:
        state.isLoggedIn = true
        console.log('This is userSaga success')
        return state;
    default:
      return state;
  }
};

