import { LoginSaga } from '../Login/LoginSagas';
import { DashboardSaga } from '../Dashboard/DashboardSagas'
import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
  //Combine sagas with 
  yield all([LoginSaga(), DashboardSaga()]);
  // OR
  // yield all([fork(FeatureSaga1)]);
}
