import types from "./cardHomeActionTypes.js";
export const cardHomeStart = (data) => ({
  type: types.CARD_HOME_START,
  payload: data,
});

export const logInSuccess = (data) => ({
  type: types.CARD_HOME_SUCCESS,
  payload: data,
});

export const logInFailure = (error) => ({
  type: types.CARD_HOME_FAILURE,
  payload: error,
});
