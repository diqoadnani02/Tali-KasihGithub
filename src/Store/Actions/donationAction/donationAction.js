import types from "./donationActionTypes";

export const bankTransferStart = (campaignId, data) => ({
  type: types.BANK_TRANSFER_DONATE_START,
  payload: data,
  campaignId,
});

export const bankTransferSuccess = (data) => ({
  type: types.BANK_TRANSFER_DONATE_SUCCESS,
  payload: data,
});

export const bankTransferFailed = (error) => ({
  type: types.BANK_TRANSFER_DONATE_FAILED,
  payload: error,
});

export const paymentDonateStart = (data) => ({
  type: types.PAYMENT_DONATE_START,
  payload: data,
});

export const paymentDonateSuccess = (data) => ({
  type: types.PAYMENT_DONATE_SUCCESS,
  payload: data,
});

export const paymentDonateFailed = (error) => ({
  type: types.PAYMENT_DONATE_FAILED,
  payload: error,
});

export const paymentTokenStart = (credentials) => ({
  type: types.PAYMENT_TOKEN_START,
  payload: credentials,
});

export const paymentTokenSuccess = (data) => ({
  type: types.PAYMENT_TOKEN_SUCCESS,
  payload: data,
});

export const paymentTokenFailed = (error) => ({
  type: types.PAYMENT_TOKEN_FAILED,
  payload: error,
});

export const allDonateStart = (data) => ({
  type: types.ALL_DONATE_START,
  payload: data,
});

export const allDonateSuccess = (data) => ({
  type: types.ALL_DONATE_SUCCESS,
  payload: data,
});

export const allDonateFailed = (error) => ({
  type: types.ALL_DONATE_FAILED,
  payload: error,
});

export const donateStatusStart = (data) => ({
  type: types.DONATE_STATUS_START,
  payload: data,
});

export const donateStatusSuccess = (data) => ({
  type: types.DONATE_STATUS_SUCCESS,
  payload: data,
});

export const donateStatusFailed = (error) => ({
  type: types.DONATE_STATUS_FAILED,
  payload: error,
});
