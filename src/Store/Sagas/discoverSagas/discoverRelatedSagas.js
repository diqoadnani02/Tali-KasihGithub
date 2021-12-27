import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "../../Actions/discoverAction/discoverRelatedActionTypes";

const API_URL = process.env.REACT_APP_BASE_API_URL;

//discover

export const discoverRelated = async (data) => {
  const response = await axios.get(`API_URL + discover/related/${data.id}`);
  console.log(response, "res");
  return response.data;
};

export function* getDiscoverRelated() {
  try {
    const discoverRelatedPage = yield call(discoverRelated);
    yield put({
      type: "GET_DISCOVER_RELATED_SUCCESS",
      payload: discoverRelatedPage,
    });
  } catch (error) {
    yield put({
      type: "GET_DISCOVER_RELATED_FAILURE",
      payload: error,
    });
  }
}

export function* onDiscoverRelatedStart() {
  yield takeLatest(types.GET_DISCOVER_RELATED_START, getDiscoverRelated);
}

export function* discoverRelatedSagas() {
  yield all([call(onDiscoverRelatedStart)]);
}
