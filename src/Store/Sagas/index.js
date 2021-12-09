import { all, call } from "redux-saga/effects";
import { authSagas } from './authSagas/authSagas'

function* rootSaga() {
  yield all([call(authSagas)]);
}

export default rootSaga;
