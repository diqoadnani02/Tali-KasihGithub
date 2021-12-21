import types from "./discoverRelatedActionTypes";

export const discoverRelatedStart = (data) => ({
  type: types.GET_DISCOVER_RELATED_START,
  payload: data,
});

export const discoverRelatedSuccess = (data) => ({
  type: types.GET_DISCOVER__RELATED_SUCCESS,
  payload: data,
});

export const discoverRelatedFailure = (data) => ({
  type: types.GET_DISCOVER_RELATED_FAILURE,
  payload: data,
});
