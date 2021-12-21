import {
  GET_DETAIL_CAMPAIGN_BEGIN,
  GET_DETAIL_CAMPAIGN_SUCCESS,
  GET_DETAIL_CAMPAIGN_FAIL,
  CREATE_CAMPAIGN_BEGIN,
  CREATE_CAMPAIGN_FAIL,
  UPDATE_CAMPAIGN_BEGIN,
  UPDATE_CAMPAIGN_FAIL,
} from "../../../Constants/types";

const initialState = {
  detailCampaign: [],
  loading: false,
  error: null,
};

const campaignReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_DETAIL_CAMPAIGN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_DETAIL_CAMPAIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        detailCampaign: payload,
      };
    case GET_DETAIL_CAMPAIGN_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        detailCampaign: [],
      };
    case CREATE_CAMPAIGN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_CAMPAIGN_FAIL:
      return {
        ...state,
        loading: true,
        error: null,
        detailCampaign: [],
      };
    case UPDATE_CAMPAIGN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_CAMPAIGN_FAIL:
      return {
        ...state,
        loading: true,
        error: null,
        detailCampaign: [],
      };
  }
};

export default campaignReducer;
