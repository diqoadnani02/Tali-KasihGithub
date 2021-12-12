import { put, takeEvery } from "@redux-saga/core/effects";
import {
  PROFILE_UPDATE_BEGIN,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
} from "../../Constants/types";
import axios from "axios";
import { BASE_URL } from "../../Constants/Constants";

function* updateProfile(action) {
  const {data} = action;
  try {
    const res = yield axios.patch(`${BASE_URL}profile/update`, data, {
        headers: { access_token: localStorage.getItem("token") },
    });
    console.log(res);
    yield put({
      type: PROFILE_UPDATE_SUCCESS,
      payload:res.data.data
    });
  } catch (err) {
    console.log(err);
    yield put({ type: PROFILE_UPDATE_FAIL, error: err });
  }
}

export function* watchUpdateProfile() {
  yield takeEvery(PROFILE_UPDATE_BEGIN, updateProfile);
}
