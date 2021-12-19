import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "../../Actions/discoverAction/discoverActionTypes";

const API_URL = process.env.REACT_APP_BASE_API_URL;

//discover

export const discover = async () => {
  const response = await axios.get(API_URL + "discover/all");
  console.log(response, "res");
  return response.data;
};

// category

export const discoverByCategory = async (data) => {
  const response = await axios.get(`${API_URL}discover/category?kategori=${data.category}&sort=${data.sort}`);
  return response.data;
};

// search

export const discoverBySearch = async (search) => {
  const response = await axios.get(`${API_URL}discover/search?search=${search}`);
  console.log(response, "res");
  return response.data;
};

// discover

export function* getDiscover() {
  try {
    const discoverPage = yield call(discover);
    yield put({
      type: "GET_DISCOVER_SUCCESS",
      payload: discoverPage,
    });
  } catch (error) {
    yield put({
      type: "GET_DISCOVER_FAILURE",
      payload: error,
    });
  }
}

// category
export function* getDiscoverByCategory(action) {
  try {
    const discoverByCategoryPage = yield call(discoverByCategory, action.payload);
    console.log(discoverByCategoryPage);
    yield put({
      type: "GET_DISCOVER_BY_CATEGORY_SUCCESS",
      payload: discoverByCategoryPage,
    });
  } catch (error) {
    yield put({
      type: "GET_DISCOVER_BY_CATEGORY_FAILURE",
      payload: error,
    });
  }
}

//search
export function* getDiscoverBySearch() {
  try {
    const discoverBySearchPage = yield call(discover);
    yield put({
      type: "GET_DISCOVER_BY_SEARCH_SUCCESS",
      payload: discoverBySearchPage,
    });
  } catch (error) {
    yield put({
      type: "GET_DISCOVER_BY_SEARCH_FAILURE",
      payload: error,
    });
  }
}

export function* onDiscoverStart() {
  yield takeLatest(types.GET_DISCOVER_START, getDiscover);
}

//discover by category

export function* onDiscoverByCategoryStart() {
  yield takeLatest(types.GET_DISCOVER_BY_CATEGORY_START, getDiscoverByCategory);
}

//discover by search

export function* onDiscoverBySearchStart() {
  yield takeLatest(types.GET_DISCOVER_BY_SEARCH_START, getDiscoverBySearch);
}

// call All in

export function* discoverSagas() {
  yield all([call(onDiscoverStart), call(onDiscoverByCategoryStart), call(onDiscoverBySearchStart)]);
}
