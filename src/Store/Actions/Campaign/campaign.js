import {
  CREATE_CAMPAIGN_BEGIN,
  UPDATE_CAMPAIGN_BEGIN,
  GET_DETAIL_CAMPAIGN_BEGIN,
  SHARE_CAMPAIGN_BEGIN,
  EDIT_CAMPAIGN_BEGIN,
} from "../../../Constants/types";

export const createCampaignAction = (body) => {
  return {
    type: CREATE_CAMPAIGN_BEGIN,
    body,
  };
};

export const updateCampaignAction = (id) => {
  return {
    type: UPDATE_CAMPAIGN_BEGIN,
    id,
  };
};

export const getDetailCampaignAction = (id) => {
  return {
    type: GET_DETAIL_CAMPAIGN_BEGIN,
    id,
  };
};

export const shareCampaignAction = (id) => {
  return {
    type: SHARE_CAMPAIGN_BEGIN,
    id,
  };
};

export const editCampaignAction = (body, id) => {
  return {
    type: EDIT_CAMPAIGN_BEGIN,
    body,
    id,
  };
};
