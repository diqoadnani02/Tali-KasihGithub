import types from '../Actions/auth/authActionTypes'

const initialState = {
    currentUser: null,
    error: null,
    token: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                error: null,
                token: action.payload.token
            };
            case types.LOGIN_FAILURE:
            case types.REGISTER_FAILURE:
                return{
                    ...state,
                    error: action.payload,
                };
                case types.LOGOUT:
                    return initialState
            default:
                return state;
    }
}

export default authReducer