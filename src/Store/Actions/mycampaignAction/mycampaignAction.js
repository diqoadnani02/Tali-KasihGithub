import types from './mycampaignActionType'

export const getMycampaignStart = (data) => ({
    type: types.GET_CAMPAIGN_START,
    payload: data
})

export const getMycampaignSuccess = (data) => ({
    type: types.GET_CAMPAIGN_SUCCESS,
    payload: data
})

export const getMycampaignFailed = (data) => ({
    type: types.GET_CAMPAIGN_FAILED,
    payload: data
})