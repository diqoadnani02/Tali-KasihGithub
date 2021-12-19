import { all, call } from "redux-saga/effects";
import { authSagas } from "./authSagas/authSagas";
import { watchProfile } from "./profile";
import { watchUpdateProfile } from "./updateProfile";
import { mydonationSagas } from "./mydonationSagas/mydonationSagas";
import { mycampaignSagas } from "./mycampaignSagas/mycampaignSagas";
import { watchGetComment, watchPostComment } from "./Campaign/comment";
import {
  watchGetDetailCampaign,
  watchPostCreateCampaign,
  watchPostUpdateCampaign,
  watchAddShareCampaign,
  watchEditCampaign,
} from "./Campaign/campaign";

function* rootSaga() {
  yield all([
    call(authSagas),
    watchProfile(),
    watchUpdateProfile(),
    mydonationSagas(),
    mycampaignSagas(),
    watchGetComment(),
    watchPostComment(),
    watchGetDetailCampaign(),
    watchPostCreateCampaign(),
    watchPostUpdateCampaign(),
    watchAddShareCampaign(),
    watchEditCampaign(),
  ]);
}

export default rootSaga;
