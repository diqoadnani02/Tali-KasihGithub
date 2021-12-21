import types from "../../Actions/donationAction/donationActionTypes";

const initialState = {
  bankTransfer: null,
  bankTransferError: null,
  paymentDonate: null,
  paymentDonateError: null,
  paymentToken: null,
  paymentTokenError: null,
  allDonate: [],
  allDonateError: null,
  donateStatus: [],
  donateStatusError: null,
  message: [],
};

const donationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BANK_TRANSFER_DONATE_SUCCESS:
    case types.PAYMENT_DONATE_SUCCESS:
    case types.PAYMENT_TOKEN_SUCCESS:
      return {
        ...state,
        bankTransfer: action.payload,
        paymentDonate: action.payload,
        paymentToken: action.payload,
        bankTransferError: null,
        paymentDonateError: null,
        paymentTokenError: null,
        message: action.payload,
      };
    case types.BANK_TRANSFER_DONATE_FAILED:
    case types.PAYMENT_DONATE_FAILED:
    case types.PAYMENT_TOKEN_FAILED:
      return {
        ...state,
        bankTransfer: null,
        paymentDonate: null,
        paymentToken: null,
        bankTransferError: action.payload,
        paymentDonateError: action.payload,
        paymentTokenError: action.payload,
        message: action.payload,
      };
    case types.ALL_DONATE_SUCCESS:
    case types.DONATE_STATUS_SUCCESS:
      return {
        ...state,
        allDonate: action.payload,
        donateStatus: action.payload,
        allDonateError: null,
        donateStatusError: null,
      };
    case types.ALL_DONATE_FAILED:
    case types.DONATE_STATUS_FAILED:
      return {
        ...state,
        allDonateError: action.payload,
        donateStatusError: action.payload,
      };

    default:
      return state;
  }
};

export default donationReducer;
