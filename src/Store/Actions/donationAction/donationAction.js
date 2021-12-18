import types from './donationActionTypes'

export const bankTransferStart = (data) => ({
    type: types.BANK_TRANSFER_DONATE_START,
    payload: data,
});

export const bankTransferSuccess = (data) => ({
    type: types.BANK_TRANSFER_DONATE_SUCCESS,
    payload: data
});

export const bankTransferFailed = (error) => ({
    type: types.BANK_TRANSFER_DONATE_FAILED,
    payload: error
});

export const creditCardStart = (data) => ({
    type: types.CREDIT_CARD_DONATE_START,
    payload: data
});

export const creditCardSuccess = (data) => ({
    type: types.CREDIT_CARD_DONATE_SUCCESS,
    payload: data
});

export const creditCardFailed = (error) => ({
    type: types.CREDIT_CARD_DONATE_FAILED,
    payload: error
});

export const debitCardStart = (credentials) => ({
    type: types.DEBIT_CARD_DONATE_START,
    payload: credentials
});

export const debitCardSuccess = (data) => ({
    type: types.DEBIT_CARD_DONATE_SUCCESS,
    payload: data
});

export const debitCardFailed = (error) => ({
    type: types.DEBIT_CARD_DONATE_FAILED,
    payload: error
});

export const allDonateStart = (data) => ({
    type: types.ALL_DONATE_START,
    payload: data
});

export const allDonateSuccess = (data) => ({
    type: types.ALL_DONATE_SUCCESS,
    payload: data
});

export const allDonateFailed = (error) => ({
    type: types.ALL_DONATE_FAILED,
    payload: error
});

export const donateStatusStart = (data) => ({
    type: types.DONATE_STATUS_START,
    payload: data
});

export const donateStatusSuccess = (data) => ({
    type: types.DONATE_STATUS_SUCCESS,
    payload: data
});

export const donateStatusFailed = (error) => ({
    type: types.DONATE_STATUS_FAILED,
    payload: error
})
