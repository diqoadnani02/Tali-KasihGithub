import { all, call } from "redux-saga/effects";
<<<<<<< HEAD
import { authSagas } from './authSagas/authSagas'
=======
import { authSagas } from './auth/authSagas'
import { watchProfile } from './profile';
>>>>>>> dde15c479003f59c5387d26fed97c4992f9c226f

function* rootSaga() {
  yield all([call(authSagas), watchProfile()]);
}

export default rootSaga;
