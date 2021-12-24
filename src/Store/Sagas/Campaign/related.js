import { put, takeEvery } from "@redux-saga/core/effects";
import {
  GET_RELATED_CAMPAIGN_BEGIN,
  GET_RELATED_CAMPAIGN_SUCCESS,
  GET_RELATED_CAMPAIGN_FAIL,
} from "../../../Constants/types";
import axios from "axios";
import { BASE_URL } from "../../../Constants/Constants";

function* getRelatedCampaign(actions) {
  const { id } = actions;
  try {
    const res = yield axios.get(`${BASE_URL}discover/related/${id}`);
    console.log(res);
    yield put({
      type: GET_RELATED_CAMPAIGN_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_RELATED_CAMPAIGN_FAIL,
      error: err,
    });
  }
}

export function* watchGetRelatedCampaign() {
  yield takeEvery(GET_RELATED_CAMPAIGN_BEGIN, getRelatedCampaign);
}

