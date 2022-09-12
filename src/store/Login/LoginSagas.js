import { call, put, all } from "redux-saga/effects";
import API from "./LoginApis";
import * as ACTIONS from "./LoginAction";
import { dispatchSnackbarError } from "../../utils/Shared";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./LoginTypes";

// Replace with your sagas

export function* LOGIN_DISPATCH_SAGA(payload) {
  console.log('AuthSaga is here')
  console.log('From authSaga '+ JSON.stringify(payload))

  // localStorage.setItem('Prateek@123', true)
  yield put 
  ({
      type : TYPES.LOGIN_USER_SAGA_SUCCESS, payload
  })
}

export function* sagasRequestExample() {
  try {
    const response = yield call(API.apiExampleRequest);
    yield put(ACTIONS.actionReceive(response.data));
    console.log('response is ' + response)
  } catch (err) {
    dispatchSnackbarError(err.response.data);
  }
}


export function* LoginSaga() {
  // yield takeLatest(TYPES.GET_DATA_REQUEST, sagasRequestExample);
  yield all([
    takeLatest(TYPES.GET_DATA_REQUEST, sagasRequestExample),
    takeLatest(TYPES.LOGIN_DISPATCH, LOGIN_DISPATCH_SAGA)
  ]);
}

