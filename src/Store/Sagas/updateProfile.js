import { put, takeEvery } from "@redux-saga/core/effects";
import {
  PROFILE_UPDATE_BEGIN,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
} from "../../Constants/types";
import axios from "axios";
import { BASE_URL_UPDATE_PROFILE } from "../../Constants/Constants";

function* updateProfile() {
  try {
    const res = yield axios.put(`${BASE_URL_UPDATE_PROFILE}/user/update-profile`, {
        headers: { access_token: localStorage.getItem("token") },
    });
    console.log(res);
    yield put({
      type: PROFILE_UPDATE_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    yield put({ type: PROFILE_UPDATE_FAIL, error: err });
  }
}

export function* watchUpdateProfile() {
  yield takeEvery(PROFILE_UPDATE_BEGIN, updateProfile);
}
