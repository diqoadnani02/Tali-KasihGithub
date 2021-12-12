import { all, call } from "redux-saga/effects";
import { authSagas } from './authSagas/authSagas';
import { watchProfile } from './profile';
import {watchUpdateProfile} from './updateProfile';


function* rootSaga() {
  yield all([call(authSagas), watchProfile(), watchUpdateProfile()]);
}

export default rootSaga;
