import axios from 'axios'
import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects'
import types from '../../Actions/donationAction/donationActionTypes'

const bankTransfer = async (data, campaignId) => {
    const response = await axios.post(`https://api-talikasih.herokuapp.com/charge/${campaignId}`, {
        headers: {access_token: localStorage.getItem("token")}
    },{
        amount: data.amount,
        name: data.name,
        message: data.message,
        method: data.method
    } )
    console.log(response.data.data)
    return response.data.data
}

const creditCard = async (data, campaignId) => {
    const response = await axios.post(`https://api-talikasih.herokuapp.com/token/${campaignId}`, {
        headers: {access_token: localStorage.getItem("token")}

    },
    {
        cardNumber: data.cardNumber,
        cardExpMonth: data.cardExpMonth,
        cardExpYear: data.cardExpYear,
        cardCvv: data.cardCvv
    }
    )
    console.log(response.data.data)
    return response.data.data
}

const debitCard = async (data, campaignId) => {
    const response = await axios.post(`https://api-talikasih.herokuapp.com/charge/${campaignId}`,{
        headers: {access_token: localStorage.getItem("token")}
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
        cardCvv: data.cardCvv
    })
    console.log(response.data.data)
    return response.data.data
}

const allDonate = async (id) => {
    const response = await axios.get(`https://api-talikasih.herokuapp.com/allDonate?${id}`);
    console.log(response)
    return response;
}

const donateStatus = async () => {
    const response = await axios.get('https://api-talikasih.herokuapp.com/charge/status', {
        headers: {access_token: localStorage.getItem("token")}
    })
    console.log(response.data.data)
    return response.data.data
}




export function* postBankTransfer(action) {
    try {
        const transferBank = yield call(bankTransfer, action.payload);
        console.log(transferBank, "transferBank")
        yield put({
            type: 'BANK_TRANSFER_DONATE_SUCCESS',
            payload: transferBank
        })
    } catch (error) {
        console.log(error.message)
        yield put({
            type: 'BANK_TRANSFER_DONATE_FAILED',
            payload: error
        })
    }
}

export function* postCreditCard(action) {
    try {
        const cardCredit = yield call(creditCard, action.payload);
        console.log(cardCredit, "cardCredit")
        yield put({
            type: 'CREDIT_CARD_DONATE_SUCCESS',
            payload: cardCredit
        })
    } catch (error) {
        console.log(error.message)
        yield put ({
            type: 'CREDIT_CARD_DONATE_FAILED',
            payload: error
        })
    }
}

export function* postDebitCard(action) {
    try {
        const cardDebit = yield call(debitCard, action.payload);
        console.log(cardDebit, "cardDebit")
        yield put ({
            type: 'DEBIT_CARD_DONATE_SUCCESS',
            payload: cardDebit
        })
    } catch (error) {
        console.log(error.message)
        yield put ({
            type: 'DEBIT_CARD_DONATE_FAILED',
            payload: error
        })
        
    }
}

export function* getAllDonates() {
    try {
        const allDonates = yield call(allDonate)
        yield put({
            type: 'ALL_DONATE_SUCCESS',
            payload: allDonates
        })
    } catch (error) {
        yield put({
            type: 'ALL_DONATE_FAILED',
            payload: error
        })
    }
}

export function* getDonateStatus(){
    try {
        const paymentStatus = yield call(donateStatus)
        yield put({
            type: 'DONATE_STATUS_SUCCESS',
            payload: paymentStatus
        })
    } catch (error) {
        yield put ({
            type: 'DONATE_STATUS_FAILED',
            payload: error
        })
    }
}

export function* onBankTransferStart(){
    yield takeLatest(types.BANK_TRANSFER_DONATE_START, postBankTransfer)
}

export function* onCreditCardStart(){
    yield takeLatest(types.CREDIT_CARD_DONATE_START,postCreditCard)
}

export function* onDebitCardStart(){
    yield takeLatest(types.DEBIT_CARD_DONATE_START, postDebitCard)
}

export function* onAllDonateStart(){
    yield takeLatest(types.ALL_DONATE_START, getAllDonates)
}

export function* onDonateStatus(){
    yield takeLatest(types.DONATE_STATUS_START, getDonateStatus)
}

export function* donationSagas(){
    yield all([
        call(onBankTransferStart),
        call(onCreditCardStart),
        call(onDebitCardStart),
        call(onAllDonateStart),
        call(onDonateStatus)
    ])
}