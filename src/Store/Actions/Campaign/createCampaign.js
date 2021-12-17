import {
  CREATE_CAMPAIGN_BEGIN,
  UPDATE_CAMPAIGN_BEGIN,
  GET_DETAIL_CAMPAIGN_BEGIN,
} from "../../../Constants/types";

export const createCampaign = (body, id) => {
  return {
    type: CREATE_CAMPAIGN_BEGIN,
    body,
    id,
  };
};

export const updateCampaign = (body, id) => {
  return {
    type: CREATE_CAMPAIGN_BEGIN,
    body,
    id,
  };
};

export const getDetailCampaign = (id) => {
  return {
    type: GET_DETAIL_CAMPAIGN_BEGIN,
    id,
  };
};
