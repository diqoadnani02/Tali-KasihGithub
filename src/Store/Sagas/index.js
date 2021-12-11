import { all, call } from "redux-saga/effects";
<<<<<<< HEAD

import { authSagas } from './authSagas/authSagas'
import { watchProfile } from './profile';

=======
<<<<<<< HEAD
import { authSagas } from './authSagas/authSagas'
=======
import { authSagas } from './auth/authSagas'
import { watchProfile } from './profile';
>>>>>>> dde15c479003f59c5387d26fed97c4992f9c226f
>>>>>>> 8b2fe7eb3bf936cd93a97f61494db8209d712d81

function* rootSaga() {
  yield all([call(authSagas), watchProfile()]);
}

export default rootSaga;
