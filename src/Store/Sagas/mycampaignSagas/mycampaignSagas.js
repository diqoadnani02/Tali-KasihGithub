import axios from 'axios'
import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'
import types from '../../Actions/mycampaignAction/mycampaignActionType'

const API_URL = process.env.REACT_APP_BASE_API_URL

export const myCampaign = async () => {
    const response = await axios.get(API_URL + 'profile/myCampaign', {
        headers: {access_token: localStorage.getItem("token")}
    })  
    console.log(response.data.data)
    return response.data.data
}

export function* getMyCampaign() {
    try{
        const campaign = yield call(myCampaign)
        yield put({
            type: 'GET_CAMPAIGN_SUCCESS',
            payload: campaign
        })
    } catch(error) {
        yield put({
            type: 'GET_CAMPAIGN_FAILED',
            payload: error
        })
    }
}

export function* onMyCampaignStart(){
    yield takeLatest(types.GET_CAMPAIGN_START, getMyCampaign)
}

export function* mycampaignSagas(){
    yield call(onMyCampaignStart)
};