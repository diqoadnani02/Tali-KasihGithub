import types from '../../Actions/mycampaignAction/mycampaignActionType'

const initialState = {
    myCampaign: [],
    myCampaignError: null,
}

const mycampaignReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_CAMPAIGN_SUCCESS:
            return {
                ...state,
                myCampaign: action.payload,
                myCampaignError: null
            };
        case types.GET_CAMPAIGN_FAILED:
            return{
                ...state,
                myCampaignError: action.payload
            }
        default:
            return state;
        
    }
}

export default mycampaignReducer