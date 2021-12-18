import types from '../../Actions/donationAction/donationActionTypes'

const initialState = {
    bankTransfer: null,
    bankTransferError: null,
    creditCard: null,
    creditCardError: null,
    debitCard: null,
    debitCardError: null,
    allDonate: [],
    allDonateError: null,
    donateStatus: [],
    donateStatusError: null,
    message: []
}

const donationReducer = (state = initialState, action) => {
    switch(action.type){
        case types.BANK_TRANSFER_DONATE_SUCCESS:
        case types.CREDIT_CARD_DONATE_SUCCESS:
        case types.DEBIT_CARD_DONATE_SUCCESS:
            return{
                ...state,
                bankTransfer: action.payload,
                creditCard: action.payload,
                debitCard: action.payload,
                bankTransferError: null,
                creditCardError: null,
                debitCardError: null,
                message: action.payload
            }
        case types.BANK_TRANSFER_DONATE_FAILED:
        case types.CREDIT_CARD_DONATE_FAILED:
        case types.DEBIT_CARD_DONATE_FAILED:
            return{
                ...state,
                bankTransfer: null,
                creditCard: null,
                debitCard: null,
                bankTransferError: action.payload,
                creditCardError: action.payload,
                debitCardError: action.payload,
                message: action.payload
            };
            case types.ALL_DONATE_SUCCESS:
            case types.DONATE_STATUS_SUCCESS:
                return{
                    ...state,
                    allDonate: action.payload,
                    donateStatus: action.payload,
                    allDonateError: null,
                    donateStatusError: null
                }
            case types.ALL_DONATE_FAILED:
            case types.DONATE_STATUS_FAILED:
                return {
                    ...state,
                    allDonateError: action.payload,
                    donateStatusError: action.payload
                }
            
        default:
            return state;
    }
}

export default donationReducer;