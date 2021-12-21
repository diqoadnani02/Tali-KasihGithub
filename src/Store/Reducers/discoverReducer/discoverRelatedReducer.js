import types from "./../../Actions/discoverAction/discoverRelatedActionTypes";

const initialState = {
  discoverRelated: null,
  discoverRelatedError: null,
  loading: false,
};

const discoverRelatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DISCOVER_RELATED_START:
      return {
        ...state,
        loading: true,
        discoverRelatedError: null,
      };
    case types.GET_DISCOVER__RELATED_SUCCESS:
      return {
        ...state,
        loading: false,
        discoverRelated: action.payload,
        discoverRelatedError: null,
      };
    case types.GET_DISCOVER_RELATED_FAILURE:
      return {
        ...state,
        discoverRelatedError: action.payload,
      };
    default:
      return state;
  }
};
export default discoverRelatedReducer;
