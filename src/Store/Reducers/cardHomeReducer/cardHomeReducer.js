import types from "../../Actions/discoverhomepage/cardHomeActionTypes";

const initialState = {
  currentUser: null,
  error: null,
  token: null,
  status: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CARD_HOME_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        token: action.payload.token,
        status: action.payload.status,
      };
    case types.CARD_HOME_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: action.payload.status,
      };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
