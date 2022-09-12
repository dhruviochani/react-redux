import { LoginSaga } from '../Login/LoginSagas';
import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
  //Combine sagas with 
  yield all([LoginSaga()]);
  // OR
  // yield all([fork(FeatureSaga1)]);
}
