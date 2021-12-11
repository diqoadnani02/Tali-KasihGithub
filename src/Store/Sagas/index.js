import { all, call } from "redux-saga/effects";

import { authSagas } from './authSagas/authSagas'
import { watchProfile } from './profile';


function* rootSaga() {
  yield all([call(authSagas), watchProfile()]);
}

export default rootSaga;
