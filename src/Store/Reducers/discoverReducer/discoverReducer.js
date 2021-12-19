import types from "./../../Actions/discoverAction/discoverActionTypes";

const initialState = {
  discover: null,
  discoverError: null,
  discoverByCategory: null,
  discoverByCategoryError: null,
  discoverBySearch: null,
  discoverBySearchError: null,
  loading: false,
};

const discoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DISCOVER_START:
      return {
        ...state,
        loading: true,
        discoverError: null,
      };
    case types.GET_DISCOVER_SUCCESS:
      return {
        ...state,
        loading: false,
        discover: action.payload,
        discoverError: null,
      };
    case types.GET_DISCOVER_FAILURE:
      return {
        ...state,
        discoverError: action.payload,
      };
    case types.GET_DISCOVER_BY_CATEGORY_START:
      return {
        ...state,
        loading: true,
        discoverByCategoryError: null,
      };
    case types.GET_DISCOVER_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        discoverByCategory: action.payload,
        discoverByCategoryError: null,
      };
    case types.GET_DISCOVER_BY_CATEGORY_FAILURE:
      return {
        ...state,
        discoverByCategoryError: null,
      };
    case types.GET_DISCOVER_BY_SEARCH_START:
      return {
        ...state,
        loading: true,
        discoverBySearchError: null,
      };
    case types.GET_DISCOVER_BY_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        discoverBySearch: action.payload,
        discoveryBySearchError: null,
      };
    case types.GET_DISCOVER_BY_SEARCH_FAILURE:
      return {
        ...state,
        discoverBySearchError: action.payload,
      };
    default:
      return state;
  }
};

export default discoverReducer;
