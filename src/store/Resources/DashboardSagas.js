import { takeLatest,put,call,fork,all,take,delay} from "redux-saga/effects";
import {loadUsersSuccess,loadUsersError} from "./DashboardAction";
import { loadUsersApi } from "./DashboardApis";

import * as types from "./DashboardTypes";

export function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error));
  }
}

export function* onLoadUsers() {
  yield takeLatest(types.LOAD_USERS_START, onLoadUsersStartAsync);
}


const userSagas = [
  fork(onLoadUsers),
];

export function* DashboardSaga() {
  yield all([...userSagas]);
}