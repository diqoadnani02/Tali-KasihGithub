import types from "./cardHomeActionTypes.js";
export const cardHomeStart = (data) => ({
  type: types.GET_CARD_HOME_START,
  payload: data,
});

export const cardHomeSuccess = (data) => ({
  type: types.GET_CARD_HOME_SUCCESS,
  payload: data,
});

export const cardHomeFailure = (data) => ({
  type: types.GET_CARD_HOME_FAILURE,
  payload: data,
});
