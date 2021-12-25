import { all, call } from "redux-saga/effects";
import { authSagas } from "./authSagas/authSagas";
import { watchProfile } from "./profile";
import { watchUpdateProfile } from "./updateProfile";
import { mydonationSagas } from "./mydonationSagas/mydonationSagas";
import { mycampaignSagas } from "./mycampaignSagas/mycampaignSagas";
import { donationSagas } from "./donationSagas/donationSagas";
import { cardHomeSagas } from "./cardHomeSagas/cardHomeSagas";
import { discoverSagas } from "./discoverSagas/discoverSagas";
import { watchGetComment, watchPostComment } from "./Campaign/comment";
import {
  watchGetDetailCampaign,
  watchPostCreateCampaign,
  watchPostUpdateCampaign,
  watchAddShareCampaign,
  watchEditCampaign,
  watchDeleteCampaign,
} from "./Campaign/campaign";
import { watchGetRelatedCampaign } from "./Campaign/related";

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
    watchGetRelatedCampaign(),
    watchDeleteCampaign(),
    donationSagas(),
    cardHomeSagas(),
    discoverSagas(),
  ]);
}

export default rootSaga;
