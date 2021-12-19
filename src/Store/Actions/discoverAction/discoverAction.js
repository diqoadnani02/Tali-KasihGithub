import types from "./discoverActionTypes";

export const discoverStart = (data) => ({
  type: types.GET_DISCOVER_START,
  payload: data,
});

export const discoverSuccess = (data) => ({
  type: types.GET_DISCOVER_SUCCESS,
  payload: data,
});

export const discoverFailure = (data) => ({
  type: types.GET_DISCOVER_FAILURE,
  payload: data,
});

export const discoverByCategoryStart = (data) => ({
  type: types.GET_DISCOVER_BY_CATEGORY_START,
  payload: data,
});

export const discoverByCategorySuccess = (data) => ({
  type: types.GET_DISCOVER_BY_CATEGORY_SUCCESS,
  payload: data,
});

export const discoverByCategoryFailure = (data) => ({
  type: types.GET_DISCOVER_BY_CATEGORY_FAILURE,
  payload: data,
});

export const discoverBySearchStart = (data) => ({
  type: types.GET_DISCOVER_BY_SEARCH_START,
  payload: data,
});

export const discoverBySearchSuccess = (data) => ({
  type: types.GET_DISCOVER_BY_SEARCH_SUCCESS,
  payload: data,
});

export const discoverBySearchFailure = (data) => ({
  type: types.GET_DISCOVER_BY_SEARCH_FAILURE,
  payload: data,
});
