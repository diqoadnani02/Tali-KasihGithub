import { all, call } from "redux-saga/effects";
import { authSagas } from './authSagas/authSagas';
import { watchProfile } from './profile';
import {watchUpdateProfile} from './updateProfile';
import {mydonationSagas} from './mydonationSagas/mydonationSagas'

function* rootSaga() {
  yield all([call(authSagas), watchProfile(), watchUpdateProfile(), mydonationSagas()]);
}

export default rootSaga;
