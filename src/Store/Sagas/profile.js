import { put, takeEvery } from "@redux-saga/core/effects";
import {
  PROFILE_BEGIN,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
} from "../../Constants/types";
import axios from "axios";
import { BASE_URL_PROFILE } from "../../Constants/Constants";

function* Profile() {
  try {
    const res = yield axios.get(`${BASE_URL_PROFILE}/user/profile`, {
      headers: { access_token: localStorage.getItem("token") },
    });
    console.log(res);
    yield put({
      type: PROFILE_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    yield put({ type: PROFILE_FAIL, error: err });
  }
}

export function* watchProfile() {
  yield takeEvery(PROFILE_BEGIN, Profile);
}
