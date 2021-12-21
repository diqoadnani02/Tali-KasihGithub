import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import types from "../../Actions/cardHomeAction/cardHomeActionTypes";

const API_URL = process.env.REACT_APP_BASE_API_URL;

export const cardHome = async () => {
  const response = await axios.get(API_URL);
  console.log(response, "res");
  return response.data;
};

export function* getCardHome() {
  try {
    const cardHomepage = yield call(cardHome);
    yield put({
      type: "GET_CARD_HOME_SUCCESS",
      payload: cardHomepage,
    });
  } catch (error) {
    yield put({
      type: "GET_CARD_HOME_FAILURE",
      payload: error,
    });
  }
}

export function* onCardHomeStart() {
  yield takeLatest(types.GET_CARD_HOME_START, getCardHome);
}

export function* cardHomeSagas() {
  yield call(onCardHomeStart);
}
