import { all, call } from "redux-saga/effects";
import { authSagas } from './authSagas/authSagas';
import { watchProfile } from './profile';
import {watchUpdateProfile} from './updateProfile';
import {mydonationSagas} from './mydonationSagas/mydonationSagas'
import {mycampaignSagas} from './mycampaignSagas/mycampaignSagas'

function* rootSaga() {
  yield all([call(authSagas), watchProfile(), watchUpdateProfile(), mydonationSagas(), mycampaignSagas()]);
}

export default rootSaga;
