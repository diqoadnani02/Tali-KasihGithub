import {
    GET_DETAIL_CAMPAIGN_BEGIN,
    GET_DETAIL_CAMPAIGN_SUCCESS,
    GET_DETAIL_CAMPAIGN_FAIL,
    CREATE_CAMPAIGN_BEGIN,
    CREATE_CAMPAIGN_FAIL,
  } from "../../../Constants/types";
  
  const initialState = {
    campaign: [],
    loading: false,
    error: null,
    detailCampaign: {
      loading: false,
      error: null,
      comment: {},
    },
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
          loading: true,
          error: null,
          ...state,
        };
      case GET_DETAIL_CAMPAIGN_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          campaign: payload,
        };
      case GET_DETAIL_CAMPAIGN_FAIL:
        return {
          ...state,
          loading: false,
          error: error,
          campaign: [],
        };
        case CREATE_CAMPAIGN_BEGIN:
          return {
            loading: true,
            error: null,
            ...state,
          };
        case CREATE_CAMPAIGN_FAIL:
          return {
            ...state,
            loading: true,
            error: null,
            campaign: [],
          };
    };
  };
  
  export default campaignReducer;
  