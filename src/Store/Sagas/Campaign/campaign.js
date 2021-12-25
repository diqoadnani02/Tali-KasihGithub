import { put, takeEvery } from "@redux-saga/core/effects";
import {
  GET_DETAIL_CAMPAIGN_BEGIN,
  GET_DETAIL_CAMPAIGN_SUCCESS,
  GET_DETAIL_CAMPAIGN_FAIL,
  CREATE_CAMPAIGN_BEGIN,
  CREATE_CAMPAIGN_SUCCESS,
  CREATE_CAMPAIGN_FAIL,
  UPDATE_CAMPAIGN_BEGIN,
  UPDATE_CAMPAIGN_SUCCESS,
  UPDATE_CAMPAIGN_FAIL,
  SHARE_CAMPAIGN_BEGIN,
  SHARE_CAMPAIGN_SUCCESS,
  SHARE_CAMPAIGN_FAIL,
  EDIT_CAMPAIGN_BEGIN,
  EDIT_CAMPAIGN_SUCCESS,
  EDIT_CAMPAIGN_FAIL,
  DELETE_CAMPAIGN_BEGIN,
  DELETE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_FAIL,
} from "../../../Constants/types";
import axios from "axios";
import { BASE_URL } from "../../../Constants/Constants";
import Swal from "sweetalert2";

function* getDetailCampaign(actions) {
  const { id } = actions;
  try {
    const res = yield axios.get(`${BASE_URL}discover/details/${id}`, {
      headers: { access_token: localStorage.getItem("token") },
    });
    console.log(res);
    yield put({
      type: GET_DETAIL_CAMPAIGN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_DETAIL_CAMPAIGN_FAIL,
      error: err,
    });
  }
}

function* postCreateCampaign(actions) {
  const { body } = actions;
  try {
    const res = yield axios.post(`${BASE_URL}campaign`, body, {
      headers: { access_token: localStorage.getItem("token") },
    });
    console.log(res);
    yield put({
      type: CREATE_CAMPAIGN_SUCCESS,
    });
    Swal.fire(
      "Success",
      "Campaign was Created",
      "success",
    );
    const resCreateCampaign = yield axios.get(`${BASE_URL}discover/all`);
    console.log(res);
    yield put({
      type: GET_DETAIL_CAMPAIGN_SUCCESS,
      payload: resCreateCampaign.data.data,
    });
  } catch (err) {
    yield put({
      type: CREATE_CAMPAIGN_FAIL,
      error: err,
    });
  }
}

function* postUpdateCampaign(actions) {
  const { body, id } = actions;
  try {
    const res = yield axios.post(`${BASE_URL}update/${id}`, body, {
      headers: { access_token: localStorage.getItem("token") },
    });
    console.log(res);
    yield put({
      type: UPDATE_CAMPAIGN_SUCCESS,
    });
    const resUpdateCampaign = yield axios.get(
      `${BASE_URL}discover/details/${id}`
    );
    console.log(res);
    yield put({
      type: GET_DETAIL_CAMPAIGN_SUCCESS,
      payload: resUpdateCampaign.data,
    });
    // Swal.fire(
    //   "Success",
    //   "Campaign was Created!",
    //   "success"((window.location.href = "/profile"))
    // );
  } catch (err) {
    yield put({
      type: UPDATE_CAMPAIGN_FAIL,
      error: err,
    });
  }
}

function* addShareCampaign(actions) {
  const { id, body } = actions;
  try {
    const res = yield axios.patch(`${BASE_URL}discover/count/${id}`, body, {
      headers: { access_token: localStorage.getItem("token") },
    });
    console.log(res);
    yield put({
      type: SHARE_CAMPAIGN_SUCCESS,
      payload: res.data.data,
    });
    const resShareCampaign = yield axios.get(
      `${BASE_URL}discover/details/${id}`
    );
    console.log(res);
    yield put({
      type: GET_DETAIL_CAMPAIGN_SUCCESS,
      payload: resShareCampaign.data,
    });
  } catch (err) {
    console.log(err);
    yield put({ type: SHARE_CAMPAIGN_FAIL, error: err });
  }
}

function* editCampaign(actions) {
  const { id, body } = actions;
  try {
    const res = yield axios.patch(`${BASE_URL}discover/edit/${id}`, body, {
      headers: { access_token: localStorage.getItem("token") },
    });
    console.log(res);
    yield put({
      type: EDIT_CAMPAIGN_SUCCESS,
      payload: res.data.data,
    });
    const resEditCampaign = yield axios.get(
      `${BASE_URL}discover/details/${id}`
    );
    console.log(res);
    yield put({
      type: GET_DETAIL_CAMPAIGN_SUCCESS,
      payload: resEditCampaign.data.data,
    });
  } catch (err) {
    console.log(err);
    yield put({ type: EDIT_CAMPAIGN_FAIL, error: err });
  }
}

function* deleteCampaign(actions) {
  const { id } = actions; 
  try {
    const res = yield axios.delete(`${BASE_URL}deleteCampaign/${id}`, {
      headers: { access_token: localStorage.getItem("token") },
    });
    console.log(res);
    yield put({
      type: DELETE_CAMPAIGN_SUCCESS,
      payload: res.data.data,
    });
    Swal.fire(
      "Success",
      "Campaign was Deleted",
      "success",
    );
  } catch (err) {
    console.log(err);
    yield put({ type: DELETE_CAMPAIGN_FAIL, error: err });
  }
}

export function* watchGetDetailCampaign() {
  yield takeEvery(GET_DETAIL_CAMPAIGN_BEGIN, getDetailCampaign);
}

export function* watchPostCreateCampaign() {
  yield takeEvery(CREATE_CAMPAIGN_BEGIN, postCreateCampaign);
}

export function* watchPostUpdateCampaign() {
  yield takeEvery(UPDATE_CAMPAIGN_BEGIN, postUpdateCampaign);
}

export function* watchAddShareCampaign() {
  yield takeEvery(SHARE_CAMPAIGN_BEGIN, addShareCampaign);
}

export function* watchEditCampaign() {
  yield takeEvery(EDIT_CAMPAIGN_BEGIN, editCampaign);
}

export function* watchDeleteCampaign() {
  yield takeEvery(DELETE_CAMPAIGN_BEGIN, deleteCampaign);
}
