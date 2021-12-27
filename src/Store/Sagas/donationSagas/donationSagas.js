import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "../../Actions/donationAction/donationActionTypes";

const bankTransfer = async (campaignId, data) => {
  const response = await axios.post(
    `https://api-talikasih.herokuapp.com/charge/${campaignId}`,
    {
      amount: data.amount,
      name: data.name,
      message: data.message,
      method: data.method,
    },
    {
      headers: { access_token: localStorage.getItem("token") },
    }
  );
  console.log(response.data);
  return response.data;
};

const paymentToken = async (data, campaignId) => {
  const response = await axios.post(
    `https://api-talikasih.herokuapp.com/token/${campaignId}`,
    {
      headers: { access_token: localStorage.getItem("token") },
    },
    {
      cardNumber: data.cardNumber,
      cardExpMonth: data.cardExpMonth,
      cardExpYear: data.cardExpYear,
      cardCvv: data.cardCvv,
    }
  );
  console.log(response.data.data);
  return response.data.data;
};

const paymentDonate = async (data, campaignId) => {
  const response = await axios.post(
    `https://api-talikasih.herokuapp.com/charge/${campaignId}`,
    {
      headers: { access_token: localStorage.getItem("token") },
    },
    {
      amount: data.amount,
      name: data.name,
      message: data.message,
      method: data.message,
      token: data.token,
      cardNumber: data.cardNumber,
      cardExpMonth: data.cardExpMonth,
      cardExpYear: data.cardExpYear,
      cardCvv: data.cardCvv,
    }
  );
  console.log(response.data.data);
  return response.data.data;
};

const allDonate = async (id) => {
  const response = await axios.get(`https://api-talikasih.herokuapp.com/allDonate?${id}`);
  console.log(response);
  return response;
};

const donateStatus = async () => {
  const response = await axios.get("https://api-talikasih.herokuapp.com/charge/status", {
    headers: { access_token: localStorage.getItem("token") },
  });
  console.log(response.data.data);
  return response.data.data;
};

export function* postBankTransfer(action) {
  try {
    const transferBank = yield call(bankTransfer, action.campaignId, action.payload);
    console.log(transferBank, "transferBank");
    yield put({
      type: "BANK_TRANSFER_DONATE_SUCCESS",
      payload: transferBank,
    });
  } catch (error) {
    console.log(error.message);
    yield put({
      type: "BANK_TRANSFER_DONATE_FAILED",
      payload: error,
    });
  }
}

export function* postPaymentToken(action) {
  try {
    const tokenPayment = yield call(paymentToken, action.payload);
    console.log(tokenPayment, "paymentToken");
    yield put({
      type: "PAYMENT_TOKEN_SUCCESS",
      payload: tokenPayment,
    });
  } catch (error) {
    console.log(error.message);
    yield put({
      type: "PAYMENT_TOKEN_FAILED",
      payload: error,
    });
  }
}

export function* postPaymentDonate(action) {
  try {
    const donatePayment = yield call(paymentDonate, action.payload);
    console.log(donatePayment, "donatePayment");
    yield put({
      type: "PAYMENT_DONATE_SUCCESS",
      payload: donatePayment,
    });
  } catch (error) {
    console.log(error.message);
    yield put({
      type: "PAYMENT_DONATE_FAILED",
      payload: error,
    });
  }
}

export function* getAllDonates() {
  try {
    const allDonates = yield call(allDonate);
    yield put({
      type: "ALL_DONATE_SUCCESS",
      payload: allDonates,
    });
  } catch (error) {
    yield put({
      type: "ALL_DONATE_FAILED",
      payload: error,
    });
  }
}

export function* getDonateStatus() {
  try {
    const paymentStatus = yield call(donateStatus);
    yield put({
      type: "DONATE_STATUS_SUCCESS",
      payload: paymentStatus,
    });
  } catch (error) {
    yield put({
      type: "DONATE_STATUS_FAILED",
      payload: error,
    });
  }
}

export function* onBankTransferStart() {
  yield takeLatest(types.BANK_TRANSFER_DONATE_START, postBankTransfer);
}

export function* onPostPaymentTokenStart() {
  yield takeLatest(types.PAYMENT_TOKEN_START, postPaymentToken);
}

export function* onPostPaymentDonateStart() {
  yield takeLatest(types.PAYMENT_DONATE_START, postPaymentDonate);
}

export function* onAllDonateStart() {
  yield takeLatest(types.ALL_DONATE_START, getAllDonates);
}

export function* onDonateStatus() {
  yield takeLatest(types.DONATE_STATUS_START, getDonateStatus);
}

export function* donationSagas() {
  yield all([call(onBankTransferStart), call(onPostPaymentTokenStart), call(onPostPaymentDonateStart), call(onAllDonateStart), call(onDonateStatus)]);
}
