import { put, takeEvery } from "@redux-saga/core/effects";
import {
  GET_COMMENT_BEGIN,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  POST_COMMENT_BEGIN,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAIL,
} from "../../../Constants/types";
import axios from "axios";
import { BASE_URL} from "../../../Constants/Constants";

function* getComment(actions) {
  const {id} = actions
  try {
    const res = yield axios.get(`${BASE_URL}comment?id=${id}`);
    console.log(res);
    yield put({
      type: GET_COMMENT_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_COMMENT_FAIL,
      error: err,
    });
  }
}

function* postComment(actions) {
  const { body, id } = actions;
  try {
    const res = yield axios.post(`${BASE_URL}comment/${id}`, body ,{
      headers: { access_token: localStorage.getItem("token") },
    })
    console.log(res);
    yield put({
      type: POST_COMMENT_SUCCESS,
    });
    const resComment = yield axios.get(`${BASE_URL}comment?id=${id}`);
    console.log(res);
    yield put({
      type: GET_COMMENT_SUCCESS,
      payload: resComment.data.data,
    });
  } catch (err) {
    yield put({
      type: POST_COMMENT_FAIL,
      error: err,
    });
  }
}

export function* watchGetComment() {
  yield takeEvery(GET_COMMENT_BEGIN, getComment);
}

export function* watchPostComment() {
  yield takeEvery(POST_COMMENT_BEGIN, postComment);
}
