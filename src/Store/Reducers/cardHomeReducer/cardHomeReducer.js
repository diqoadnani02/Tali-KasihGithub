import types from "../../Actions/cardHomeAction/cardHomeActionTypes";

const initialState = {
  cardHome: null,
  cardHomeError: null,
  loading: false,
};

const cardHomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARD_HOME_START:
      return {
        ...state,
        loading: true,
        cardHomeError: null,
      };
    case types.GET_CARD_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        cardHome: action.payload,
        cardHomeError: null,
      };
    case types.GET_CARD_HOME_FAILURE:
      return {
        ...state,
        cardHomeError: action.payload,
      };
    default:
      return state;
  }
};

export default cardHomeReducer;
