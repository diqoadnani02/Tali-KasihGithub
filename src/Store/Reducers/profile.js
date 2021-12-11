import {
  PROFILE_BEGIN,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
} from "../../Constants/types";

const initialState = {
  profile: [],
  loading: false,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case PROFILE_BEGIN:
      return {
        loading: true,
        error: null,
        ...state,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        profile: payload,
      };
    case PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        profile: [],
      };
  }
};

export default profileReducer;
