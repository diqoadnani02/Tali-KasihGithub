import {
  GET_RELATED_CAMPAIGN_BEGIN,
  GET_RELATED_CAMPAIGN_SUCCESS,
  GET_RELATED_CAMPAIGN_FAIL,
} from "../../../Constants/types";

const initialState = {
  related: [],
  loading: false,
  error: null,
};

const relatedCampaignReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_RELATED_CAMPAIGN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_RELATED_CAMPAIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        related: payload,
      };
    case GET_RELATED_CAMPAIGN_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        related: [],
      };
  }
};

export default relatedCampaignReducer ;
