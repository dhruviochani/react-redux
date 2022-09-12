import * as types from "./LoginTypes";

//Replace action name and update action types
export const actionRequest = () => ({
  type: types.GET_DATA_REQUEST
});

export const actionReceive = payload => ({
  type: types.GET_DATA_RECEIVE,
  payload
});

export const LOGIN_DISPATCH_FUNCTION = (payload) =>{
  return{
    type : types.LOGIN_DISPATCH,
    payload : payload
  }
}
