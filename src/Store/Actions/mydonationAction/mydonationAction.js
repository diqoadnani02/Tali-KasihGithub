import types from './mydonationActionType'

export const getMydonationStart = (data) => ({
    type: types.GET_DONATION_START,
    payload: data
});

export const getMydonationSuccess = (data) => ({
    type: types.GET_DONATION_SUCCESS,
    payload: data
});

export const getMydonationFailed = (data) => ({
    type: types.GET_DONATION_FAILED,
    payload: data
});