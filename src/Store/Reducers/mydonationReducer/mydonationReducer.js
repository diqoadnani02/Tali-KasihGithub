import types from '../../Actions/mydonationAction/mydonationActionType'

const initialState = {
    myDonate: [],
    myDonateError: null,
}

const mydonationReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_DONATION_SUCCESS:
            return{
                ...state,
                myDonate: action.payload,
                myDonateError: null
            };
        case types.GET_DONATION_FAILED:
            return{
                ...state,
                myDonateError: action.payload
            }
        
            default:
                return state;
    }
    
}

export default mydonationReducer