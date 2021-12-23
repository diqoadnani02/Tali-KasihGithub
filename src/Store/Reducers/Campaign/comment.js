import {
  GET_COMMENT_BEGIN,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  POST_COMMENT_BEGIN,
  POST_COMMENT_FAIL,
} from "../../../Constants/types";

const initialState = {
  comment: [],
  loading: false,
  error: null,
  detailComment: {
    loading: false,
    error: null,
    comment: {},
  },
};

const commentReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_COMMENT_BEGIN:
      return {
        loading: true,
        error: null,
        ...state,
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        comment: payload,
      };
    case GET_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        comment: [],
      };
      case POST_COMMENT_BEGIN:
        return {
          loading: true,
          error: null,
          ...state,
        };
      case POST_COMMENT_FAIL:
        return {
          ...state,
          loading: true,
          error: null,
          comment: [],
        };
  };
};

export default commentReducer;
