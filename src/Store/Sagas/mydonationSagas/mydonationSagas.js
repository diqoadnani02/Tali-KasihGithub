import axios from 'axios'
import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'
import types from '../../Actions/mydonationAction/mydonationActionType'

const API_URL = process.env.REACT_APP_BASE_API_URL

export const myDonation = async () => {
    const response = await axios.get(API_URL + 'profile/myDonate', {
        headers: {access_token: localStorage.getItem("token")} 
    })
    console.log(response.data.data)
    return response.data.data
}

export function* getMyDonation() {
    try {
        const donation = yield call(myDonation)
        yield put({
            type: 'GET_DONATION_SUCCESS',
            payload: donation
        });
    
} catch(error) {
    yield put({
        type: 'GET_DONATION_FAILURE',
        payload: error
    })
}
}

export function* onMyDonationStart(){
    yield takeLatest(types.GET_DONATION_START, getMyDonation)
}

export function* mydonationSagas() {
    yield call(onMyDonationStart)
};